import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice';
import { useEffect } from 'react';
import { fetchAllUsers } from './redux/slices/userSlice';
import Loading from './Loading';

function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const { listUsers, status, error } = useSelector(state => state.user);

  useEffect(() => {
    if (status === 'idle')
      dispatch(fetchAllUsers());
  }, [dispatch, status]);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div><Loading /></div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <div>{count}</div>
            <div>
              <ul>
                {listUsers.map((user) => (
                  <li key={user.id}>{user.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
