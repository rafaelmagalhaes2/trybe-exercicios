import { useState } from 'react';

function GetNameUser() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const getName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const getLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        value={ name }
        onChange={ getName }
      />
      <label htmlFor="lastName">Last Name: </label>
      <input
        id="lastName"
        type="text"
        value={ lastName }
        onChange={ getLastName }
      />
      <p>{ name }</p>
      <p>{ lastName }</p>
    </div>
  );
}

export default GetNameUser;
