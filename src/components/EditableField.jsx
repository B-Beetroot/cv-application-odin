import { useState } from "react";

export default function EditableField({
  value,
  setValue,
  placeholder,
  className,
}) {
  const [editing, setEditing] = useState(false);

  const finishEditing = () => {
    if (value.trim() === "") {
      setValue(placeholder);
    }
    setEditing(false);
  };

  return (
    <div className={className}>
      {!editing ? (
        <>
          <h1
            className={`text-display ${value === placeholder ? "faded-default" : ""}`}
          >
            {value}
          </h1>

          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            autoFocus
            className="text-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="submit-btn" onClick={finishEditing}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}
