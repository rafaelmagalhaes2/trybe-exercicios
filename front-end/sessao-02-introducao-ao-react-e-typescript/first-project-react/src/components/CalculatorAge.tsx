import React, { useState } from 'react';
import { calculateAge } from '../utils/age';

export default function CalculatorAge() {
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
    <aside>
      <h1>Age Calculator</h1>
      <label htmlFor="date">
        Ano de nascimento:
      </label>
      <input
        id="date"
        type="date"
        value={ birthdate }
        onChange={ handleBirthdateChange }
      />
      <button className="button" onClick={ handleCalculateAge }>Calculate Age</button>
      {age !== null && (
        <p>{ age }</p>
      )}
    </aside>
  );
}
