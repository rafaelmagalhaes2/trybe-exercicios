import { ReactElement } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App(): ReactElement {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
