import { useState } from "react";

export default function Text() {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState(() => {
    return localStorage.getItem("memo");
  });

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          localStorage.setItem("memo", text);
          setSavedText(text);
        }}
      >
        保存
      </button>
      <p>{savedText}</p>
    </div>
  );
}
