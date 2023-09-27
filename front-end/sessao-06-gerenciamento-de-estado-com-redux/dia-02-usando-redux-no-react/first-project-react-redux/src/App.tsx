import { useSelector } from 'react-redux';

type RootState = {
  count: number;
};

function App() {
  const rootState = useSelector((state: RootState) => state);

  return (
    <div>
      <h1>{rootState.count}</h1>
      <h2>0</h2>
      <button>Incrementa 1</button>
      <button>Incrementa 5</button>
    </div>
  );
}

export default App;
