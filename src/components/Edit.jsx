export default function List({
  text,
  setText,
  savedText,
  setSavedText,
  setMode,
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
          const newText = [...savedText, text];
          localStorage.setItem("memo", JSON.stringify(newText));
          setSavedText(newText);
          setMode("list");
          setText("");
        }}
      >
        保存
      </button>
    </div>
  );
}
