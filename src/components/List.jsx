export default function List({ savedText, onSelectMemo }) {
  return (
    <div>
      {savedText.map((text) => (
        <div key={text.id}>
          <button
            onClick={() => {
              onSelectMemo(text);
            }}
          >
            {text.text.split(/(\n)/)[0]}
          </button>
        </div>
      ))}
    </div>
  );
}
