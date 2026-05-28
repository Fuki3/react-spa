export default function List({ setText, savedText, setEditingId, setMode }) {
  return (
    <div>
      {savedText.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => {
              setText(item.text);
              setEditingId(item.id);
              setMode("edit");
            }}
          >
            {item.text.split(/(\n)/)[0]}
          </button>
        </div>
      ))}
    </div>
  );
}
