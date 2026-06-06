import "../App.css";

export default function List({ savedMemo, editingId, onSelectMemo }) {
  return (
    <div>
      {savedMemo.length > 0 && (
        <div>
          {savedMemo.map((memo) => (
            <div key={memo.id}>
              <button
                className={
                  editingId === memo.id ? "selected-link-button" : "link-button"
                }
                onClick={() => {
                  onSelectMemo(memo);
                }}
              >
                {memo.title}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
