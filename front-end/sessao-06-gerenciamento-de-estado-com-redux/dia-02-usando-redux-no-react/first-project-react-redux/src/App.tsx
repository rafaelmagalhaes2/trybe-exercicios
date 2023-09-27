import { useSelector, useDispatch } from 'react-redux';
import { clickCounter, actionCreator } from './redux/actions/index';

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  }
};

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  /*
    Lembrando que podemos chamar a propriedade diretamente no parametro do userSelector

    const count = useSelector((state: RootState) => state.counterReducer.count);
    const clicks = useSelector((state: RootState) => state.counterReducer.clicks);
 */

  function handleClick(count = 1) {
    dispatch(actionCreator(count));
    dispatch(clickCounter());
  }

  return (
    <main>
      <div className="counter-container">
        <h1>Contador</h1>
        <h2>{rootState.counterReducer.count}</h2>
        <h1>Clicks</h1>
        <h2>{rootState.counterReducer.clicks}</h2>
      </div>
      <div className="button-container">
        <button onClick={() => handleClick()}>Incrementa 1</button>
        <button onClick={() => handleClick(5)}>Incrementa 5</button>
      </div>
    </main>
  );
}

export default App;
