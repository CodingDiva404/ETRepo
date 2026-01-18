import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  // input handler
  const handleInput = (e) => setInput(e.target.value);

  // add task
  const addTask = () => {
    if (!input.trim()) return;

    setTask([...task, { id: Date.now(), text: input }]);
    setInput("");
  };

  // edit task
  const editTask = (id) => {
    const newText = prompt("Edit task:");
    if (!newText) return;

    setTask(task.map(t =>
      t.id === id ? { ...t, text: newText } : t
    ));
  };

  // delete task
  const deleteTask = (id) => {
    setTask(task.filter(t => t.id !== id));
  };

  return (
    <div className="todo">
      <h1>Todo List</h1>

      <div className="input">
        <input
          type="text"
          className="userInput"
          value={input}
          onChange={handleInput}
        />
        <button className="addBtn" onClick={addTask}>
          Add Item
        </button>
      </div>

      <div className="list">
        <ul>
          {task.map(t => (
            <li key={t.id}>
              <span className="todoText">{t.text}</span>
              <div className="actions">
                <button className="editBtn" onClick={() => editTask(t.id)}>
                  Edit
                </button>
                <button className="removeBtn" onClick={() => deleteTask(t.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
s