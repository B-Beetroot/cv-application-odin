import { useState } from "react";

export default function EditableField({ value, setValue, placeholder }) {
  const [editing, setEditing] = useState(false);

  const finishEditing = () => {
    if (value.trim() === "") {
      setValue(placeholder);
    }
    setEditing(false);
  };

  return (
    <>
      {!editing ? (
        <h1
          className={`text-display ${value === placeholder ? "faded-default" : ""}`}
          onClick={() => {
            setEditing(true);
            if (value === placeholder) {
              setValue("");
            }
          }}
        >
          {value}
        </h1>
      ) : (
        <input
          autoFocus
          className="text-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={finishEditing}
          onKeyDown={(e) => e.key === "Enter" && finishEditing()}
        />
      )}
    </>
  );
}
