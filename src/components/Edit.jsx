import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext.jsx";

export default function Edit({ text, setText, onSave, onDelete }) {
  const { login } = useContext(LoginContext);
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {login && (
        <div className="button-group">
          <button onClick={onSave}>更新</button>
          <button onClick={onDelete}>削除</button>
        </div>
      )}
    </div>
  );
}
