export default function List({ setText, savedText, setMode }) {
  return (
    <div>
      {savedText.map((text, id) => (
        <div key={id}>
          <button
            onClick={() => {
              setText(text);
              setMode("edit");
            }}
          >
            {text.split(/(\n)/)[0]}
          </button>
        </div>
      ))}
    </div>
  );
}
