import './App.css';
import { useState } from 'react';

function App() {

  let [add, setAdd] = useState();
  let [remove, setRemove] = useState();
  let [edit, setEdit] = useState();
  let [input, setInput] = useState();
  let [task, setTask] = useState([]);


  const handleInput = (e) => {
    let userInput = e.target.value
    setInput(userInput)
  }

  const addTask = () => {
    // To 
    if (input.trim() === "") return;
    setTask([...task, { text: input, id: Date.now() }]);
    setInput("");
  }

  const editTask = () => {

  }

  const deleteTask = () => {

  }


  return (
    <div className='todo'>
      <h1>Todo List</h1>
      <div className="input">
        <input type="text" className="userInput" onChange={handleInput} />
        <button className="addBtn" onClick={addTask}>Add Item</button>
      </div>

      <div className="list">
        <ul>
          {task.map((t) => (
            <li key={t.id}>
              <span className="todoText">{t.text}</span>
              <div className="actions">
                <button className="editBtn">Edit</button>
                <button className="removeBtn">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
