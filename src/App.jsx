import { useState } from "react";
import "./App.css";
import List from "./components/List.jsx";
import Edit from "./components/Edit.jsx";

export default function App() {
  const [text, setText] = useState("");
  const [savedMemo, setSavedMemo] = useState(() => {
    return JSON.parse(localStorage.getItem("memo")) || [];
  });
  const [editingId, setEditingId] = useState(null);
  const [mode, setMode] = useState("list");

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
    const title = text.split("\n")[0] || "新規メモ";

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
      <p className="page-title">{mode === "list" ? "一覧" : "編集"}</p>
      <div className="container">
        <div>
          <List
            savedMemo={savedMemo}
            editingId={editingId}
            onSelectMemo={handleSelectMemo}
          />
          <button className="add-button" onClick={handleAdd}>
            +
          </button>
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
    </>
  );
}
