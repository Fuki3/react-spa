import { useState } from "react";

export default function Text() {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState(() => {
    return JSON.parse(localStorage.getItem("memo"));
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
          const newText = [...savedText, text];
          localStorage.setItem("memo", JSON.stringify(newText));
          setSavedText(newText);
        }}
      >
        保存
      </button>
      <ul>
        {savedText.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
