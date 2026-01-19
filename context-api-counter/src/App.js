import './App.css';
import Counter from './Component/Counter';
import { CounterContext } from '../src/ContextData'
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
      <CounterContext.Provider value={{ number, increaseValue, decreaseValue }}>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
