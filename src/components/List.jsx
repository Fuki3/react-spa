export default function List({ savedMemo, onSelectMemo }) {
  return (
    <div>
      {savedMemo.map((memo) => (
        <div key={memo.id}>
          <button
            onClick={() => {
              onSelectMemo(memo);
            }}
          >
            {memo.title}
          </button>
        </div>
      ))}
    </div>
  );
}
