import './App.css';
import { useState } from 'react';

function App() {

  let [number , setNumber] = useState(0);

  function increaseValue() {
    return setNumber(number + 1)
  }
  function decreaseValue(params) {
    if(number === 0) return;  //If count is 0, exit the function immediately.
    setNumber(number - 1)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className='main'>
          <button onClick={increaseValue}>+</button>
          <h3>{number}</h3>
          <button onClick={decreaseValue}>-</button>
      </div>
    </div>
  );
}

export default App;
