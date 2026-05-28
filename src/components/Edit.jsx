export default function Edit({
  text,
  setText,
  savedText,
  setSavedText,
  setMode,
  editingId,
  setEditingId,
}) {
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newMemo = { id: crypto.randomUUID(), text: text };
          const newText = [...savedText, newMemo];
          localStorage.setItem("memo", JSON.stringify(newText));
          setSavedText(newText);
          setMode("list");
          setText("");
        }}
      >
        保存
      </button>

      <button
        onClick={() => {
          const updated = savedText.filter((item) => item.id !== editingId);
          setSavedText(updated);
          localStorage.setItem("memo", JSON.stringify(updated));
          setMode("list");
          setText("");
          setEditingId(null);
        }}
      >
        削除
      </button>
    </div>
  );
}
