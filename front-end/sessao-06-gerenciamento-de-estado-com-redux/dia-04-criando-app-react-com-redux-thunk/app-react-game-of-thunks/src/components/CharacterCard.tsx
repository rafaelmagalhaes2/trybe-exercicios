// src/components/CharacterCard.tsx

import { useSelector } from 'react-redux';
import { CharacterState } from '../types';

function CharacterCard() {
  const { character, isLoading, error } = useSelector((state: CharacterState) => state);

  if (error) { return <div>{error}</div>; }
  if (isLoading) { return <h3>Loading...</h3>; }

  if (character) {
    return (
      <div>
        <h2>
          {character.name}
        </h2>
        <p>{`Born ${character.born}`}</p>
        <h3>Titles:</h3>
        <ol>
          {character.titles.map((title) => (
            <li key={ `${title}` }>{title}</li>
          ))}
        </ol>
        <h3>Aliases:</h3>
        <ol>
          {character.aliases.map((alias) => (
            <li key={ `${alias}` }>{alias}</li>
          ))}
        </ol>
      </div>
    );
  }

  return <div>Type a character name and click to search!</div>;
}

export default CharacterCard;
