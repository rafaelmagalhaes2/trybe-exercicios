import React, { useState } from 'react';
import Title from './Title';
import ModuleDetails from './ModuleDetails';
import { calculateAge } from '../utils/age';

export default function HelloWorld() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState<number | null>(null);

  const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(event.target.value);
  };

  const handleCalculateAge = () => {
    const calculatedAge = calculateAge(birthdate);
    setAge(calculatedAge);
  };
  return (
    <>
      <Title />
      <ModuleDetails />

      <div>
        <h1>Age Calculator</h1>
        <label>
          Enter your birthdate:
          <input
            type="date"
            value={ birthdate }
            onChange={ handleBirthdateChange }
          />
        </label>
        <button onClick={ handleCalculateAge }>Calculate Age</button>
        {age !== null && (
          <p>{ age }</p>
        )}
      </div>
    </>
  );
}
