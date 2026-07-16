import { useState } from "react";
import "./App.css";
import List from "./components/List.jsx";
import Edit from "./components/Edit.jsx";
import { useLogin } from "./components/Login.jsx";

export default function App() {
  const [text, setText] = useState("");
  const [savedMemo, setSavedMemo] = useState(() => {
    return JSON.parse(localStorage.getItem("memo")) || [];
  });
  const [editingId, setEditingId] = useState(null);
  const [mode, setMode] = useState("list");
  const { isLogin, login, logout } = useLogin();

  const handleSelectMemo = (memo) => {
    setText(memo.text);
    setEditingId(memo.id);
    setMode("edit");
  };

  const handleAdd = () => {
    setEditingId(crypto.randomUUID());
    setText("");
    setMode("edit");
  };

  const handleSave = () => {
    const firstLine = text.split("\n")[0];
    const title = firstLine || "新規メモ";

    if (firstLine.trim() === "") {
      alert("本文を一行目から入力してください");
      return;
    }

    const updated = [
      ...savedMemo.filter((memo) => memo.id !== editingId),
      { id: editingId, text, title },
    ];

    setSavedMemo(updated);
    localStorage.setItem("memo", JSON.stringify(updated));

    setMode("list");
    setEditingId(null);
  };

  const handleDelete = () => {
    const updated = savedMemo.filter((memo) => memo.id !== editingId);

    setSavedMemo(updated);
    localStorage.setItem("memo", JSON.stringify(updated));

    setMode("list");
    setText("");
    setEditingId(null);
  };

  return (
    <>
      <p className="login-state">{isLogin ? "ログイン済み" : "未ログイン"}</p>
      <div className="container">
        <div className="header">
          {isLogin ? (
            <button className="login-button" onClick={() => logout()}>
              ログアウト
            </button>
          ) : (
            <button onClick={() => login()}>ログイン</button>
          )}
        </div>
        <div className="body">
          <div>
            <List
              savedMemo={savedMemo}
              editingId={editingId}
              onSelectMemo={handleSelectMemo}
            />
            {isLogin && (
              <button className="add-button" onClick={handleAdd}>
                +
              </button>
            )}
          </div>
          {mode === "edit" && (
            <>
              <Edit
                text={text}
                setText={setText}
                onSave={handleSave}
                onDelete={handleDelete}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
