// src/App.tsx\

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCharacter } from './redux/actions';
import { Dispatch } from './types';

import './App.css';

function App() {
  const [character, setCharacter] = useState('');
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={ (
          { target }: React.ChangeEvent<HTMLInputElement>,
        ) => setCharacter(target.value) }
        value={ character }
        placeholder="Character Name"
      />
      <button
        type="button"
        onClick={ () => dispatch(fetchCharacter(character)) }
      >
        Search
      </button>
    </div>
  );
}

export default App;
