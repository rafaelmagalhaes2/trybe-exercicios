/*
  Tipando apenas os campos que são usados
*/
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type CharacterType = {
  name: string;
  born: string;
  titles: string[];
  aliases: string[];
};

export type CharacterState = {
  isLoading: boolean;
  character: CharacterType | null;
  error: string | null;
};

export type Dispatch = ThunkDispatch<CharacterState, null, AnyAction>;
