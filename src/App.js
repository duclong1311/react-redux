import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <div>{count}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
