import './App.css';
import { useState } from 'react';

function App() {

  let [add , setAdd] = useState();
  let [remove , setRemove] = useState();
  let [edit , setEdit] = useState();
  let [input , setInput] = useState();

  
  const handleInput = (e) => {
    let userInput = setInput(e.target.value)
    console.log(userInput)
  }

  const addTask = () => {

  }


  return (
    <div className='todo'>
      <h1>Todo List</h1>
      <div className="input">
        <input type="text" className="userInput" onChange={handleInput}/>
        <button className="addBtn">Add Item</button>
      </div>

      <div className="list">
        <ul>
          <li>
            <li>
              <span className="todoText">Buy milk and eggs</span>
              <div className="actions">
                <button className="editBtn">Edit</button>
                <button className="removeBtn">Remove</button>
              </div>
            </li>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
