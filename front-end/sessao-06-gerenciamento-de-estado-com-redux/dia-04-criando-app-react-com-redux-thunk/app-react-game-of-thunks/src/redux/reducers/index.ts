// src/redux/reducers/characterReducer.ts

import { CharacterState, CharacterType } from '../../types';

const initialState = {
  isLoading: false,
  character: null,
  error: null,
};

function characterReducer(
  state: CharacterState = initialState,
  action: { type: string; character?: CharacterType; error?: string },
) {
  switch (action.type) {
    /*
       SEARCH_BEGIN: Essa ação indicará que o fetch() à API foi realizado.
       O reducer setará o valor de isLoading para true, indicando que está
       aguardando retorno da API.
    */
    case 'SEARCH_BEGIN':
      return {
        ...state,
        isLoading: true,
      };

    /*
       SEARCH_SUCCESS: Essa ação indicará que a API retornou as informações
       com sucesso, setará o valor de isLoading para false, indicando que
       não está mais aguardando retorno da API, e armazenará o retorno da
       API na chave character.
    */
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        character: action.character || null,
      };

    /*
       SEARCH_ERROR: Essa ação indicará que a API retornou qualquer tipo de
       erro. Se ocorrer, o reducer armazenará a mensagem de erro na chave
       error do estado global.
    */
    case 'SEARCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error || 'Erro desconhecido',
      };
    default:
      return state;
  }
}

export default characterReducer;
