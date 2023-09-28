import { CharacterType, Dispatch } from '../../types';

export const searchBegin = () => (
  { type: 'SEARCH_BEGIN' }
);

export const searchSuccess = (character: CharacterType) => (
  { type: 'SEARCH_SUCCESS', character }
);

export const searchFailure = (error: string) => (
  { type: 'SEARCH_ERROR', error }
);

export function fetchCharacter(name: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(searchBegin());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data: CharacterType[] = await response.json();
      dispatch(searchSuccess(data[0]));
    } catch (error: any) {
      dispatch(searchFailure(error.message));
    }
  };
}
