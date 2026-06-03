import { useState } from "react";
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
    const newMemo = {
      id: crypto.randomUUID(),
      title: "新規メモ",
      text,
    };

    const newText = [...savedMemo, newMemo];

    setSavedMemo(newText);
    localStorage.setItem("memo", JSON.stringify(newText));
    setEditingId(newMemo.id);
    setText("");
    setMode("edit");
  };

  const handleSave = () => {
    const title = text.split("\n")[0];

    const updated = savedMemo.map((memo) =>
      memo.id === editingId ? { ...memo, text, title } : memo,
    );

    setSavedMemo(updated);
    localStorage.setItem("memo", JSON.stringify(updated));

    setMode("list");
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
    <div>
      {mode === "list" ? (
        <>
          <List savedMemo={savedMemo} onSelectMemo={handleSelectMemo} />
          <button onClick={handleAdd}>+</button>
        </>
      ) : (
        <>
          <Edit
            text={text}
            setText={setText}
            onSave={handleSave}
            onDelete={handleDelete}
          />
          <button onClick={() => setMode("list")}>back</button>
        </>
      )}
    </div>
  );
}
