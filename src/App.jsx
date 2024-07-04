import './App.css';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByPayload,
  reset,
} from './app/features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    setValue(Number(e.target.value) || 0);
  };

  const handleReset = () => {
    setValue(0);
    dispatch(reset());
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={() => dispatch(incrementByAmount(value))}>+</button>
      <button onClick={() => dispatch(decrementByPayload(value))}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;
