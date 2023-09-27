import { useSelector, useDispatch } from 'react-redux';
import { clickCounter, actionCreator } from './redux/actions/index';

type RootState = {
  clicks: number,
  count: number;
};

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  function handleClick(count = 1) {
    dispatch(actionCreator(count));
    dispatch(clickCounter());
  }

  return (
    <main>
      <div className="counter-container">
        <h1>Contador</h1>
        <h2>{rootState.count}</h2>
        <h1>Clicks</h1>
        <h2>{rootState.clicks}</h2>
      </div>
      <div className="button-container">
        <button onClick={() => handleClick()}>Incrementa 1</button>
        <button onClick={() => handleClick(5)}>Incrementa 5</button>
      </div>
    </main>
  );
}

export default App;
