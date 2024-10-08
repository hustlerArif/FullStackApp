import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(""); // Initialize text as an empty string
  const [list, setList] = useState([]); // Stores the list of tasks
  const [editingId, setEditingId] = useState(null); // Stores the id of the task being edited

  // Handle form submission (Adding a new task)
  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingId === null) {
      // Add a new task if we're not editing
      const newTask = { id: Math.random(), text: text };
      setList([...list, newTask]);
    } else {
      // Update task if we're editing
      handleUpdate();
    }

    setText(""); // Clear the input after submission
  };

  // Delete a task
  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  // Edit a task
  const handleEdit = (id) => {
    const taskToEdit = list.find((item) => item.id === id); // Find the task to edit
    setText(taskToEdit.text); // Set the current text in the input
    setEditingId(id); // Mark this task as the one being edited
  };

  // Update the task
  const handleUpdate = () => {
    const updatedList = list.map((item) => {
      if (item.id === editingId) {
        return { ...item, text: text }; // Update the text of the specific task
      }
      return item;
    });

    setList(updatedList); // Update the task list
    setText(""); // Clear the input field
    setEditingId(null); // Reset editing state
  };

  return (
    <>
      <h2>CRUD operation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write anything"
          value={text}
          onChange={(e) => setText(e.target.value)} // Update the text state when typing
        />
        <button type="submit">
          {editingId === null ? "Submit" : "Update"} {/* Toggle button text */}
        </button>
      </form>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <div>
              {item.text}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
