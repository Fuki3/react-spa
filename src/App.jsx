import { useState } from "react";
import List from "./components/List.jsx";
import Edit from "./components/Edit.jsx";

export default function Text() {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState(() => {
    return JSON.parse(localStorage.getItem("memo")) || [];
  });

  return (
    <div>
      {mode === "list" ? (
        <>
          <List setText={setText} savedText={savedText} setMode={setMode} />
          <button
            onClick={() => {
              setText("");
              setMode("edit");
            }}
          >
            +
          </button>
        </>
      ) : (
        <>
          <Edit
            text={text}
            setText={setText}
            savedText={savedText}
            setSavedText={setSavedText}
            setMode={setMode}
          />
          <button onClick={() => setMode("list")}>back</button>
        </>
      )}
    </div>
  );
}
