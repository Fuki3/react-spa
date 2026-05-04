import { useState } from "react";

export default function Text() {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState(() => {
    return JSON.parse(localStorage.getItem("memo"));
  });

  return (
    <div>
      <textarea
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
      <div>
        {savedText.map((text, id) => (
          <div key={id}>{text.split(/(\n)/)[0]}</div>
        ))}
      </div>
    </div>
  );
}
