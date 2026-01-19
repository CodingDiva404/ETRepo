import { useContext } from 'react';
import '../App.css';
import { CounterContext } from '../ContextData';

function Counter() {

  const { number, increaseValue, decreaseValue } = useContext(CounterContext);


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

export default Counter;
