import { useLogin } from "./Login.jsx";

export default function Edit({ text, setText, onSave, onDelete }) {
  const { isLogin } = useLogin();
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {isLogin && (
        <div className="button-group">
          <button onClick={onSave}>更新</button>
          <button onClick={onDelete}>削除</button>
        </div>
      )}
    </div>
  );
}
