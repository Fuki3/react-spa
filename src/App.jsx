import { useState } from "react";
import List from "./components/List.jsx";
import Edit from "./components/Edit.jsx";

export default function App() {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState(() => {
    return JSON.parse(localStorage.getItem("memo")) || [];
  });
  const [editingId, setEditingId] = useState(null);
  const [mode, setMode] = useState("list");

  const handleSelectMemo = (memo) => {
    setText(memo.text);
    setEditingId(memo.id);
    setMode("edit");
  };

  const handleSave = () => {
    const newMemo = {
      id: crypto.randomUUID(),
      text,
    };

    const newText = [...savedText, newMemo];

    setSavedText(newText);
    localStorage.setItem("memo", JSON.stringify(newText));

    setMode("list");
    setText("");
  };

  const handleDelete = () => {
    const updated = savedText.filter((memo) => memo.id !== editingId);

    setSavedText(updated);
    localStorage.setItem("memo", JSON.stringify(updated));

    setMode("list");
    setText("");
    setEditingId(null);
  };

  return (
    <div>
      {mode === "list" ? (
        <>
          <List savedText={savedText} onSelectMemo={handleSelectMemo} />
          <button
            onClick={() => {
              setText("");
              setMode("edit");
            }}
          >
            +
          </button>
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
