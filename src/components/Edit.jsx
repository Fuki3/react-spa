export default function Edit({ text, setText, onSave, onDelete }) {
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={onSave}>保存</button>

      <button onClick={onDelete}>削除</button>
    </div>
  );
}
