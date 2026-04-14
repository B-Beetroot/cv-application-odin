import EditableField from "./EditableField";

export default function EditableFieldList({
  title,
  items,
  setItems,
  defaultPlaceholder,
}) {
  const updateItem = (index, newValue) => {
    const updated = [...items];
    updated[index].value = newValue;
    setItems(updated);
  };

  const deleteItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const addItem = () => {
    setItems([
      ...items,
      { value: defaultPlaceholder, placeholder: defaultPlaceholder },
    ]);
  };

  return (
    <div className="section">
      <h1>{title}</h1>

      {items.map((item, index) => (
        <div key={index} className="field-row">
          <EditableField
            value={item.value}
            setValue={(val) => updateItem(index, val)}
            placeholder={item.placeholder}
          />

          <button className="delete-btn" onClick={() => deleteItem(index)}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={addItem}>Add {title}</button>
      <hr />
    </div>
  );
}
