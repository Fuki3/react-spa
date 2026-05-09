export default function List({ savedText }) {
  return (
    <div>
      {savedText.map((text, id) => (
        <div key={id}>{text.split(/(\n)/)[0]}</div>
      ))}
    </div>
  );
}
