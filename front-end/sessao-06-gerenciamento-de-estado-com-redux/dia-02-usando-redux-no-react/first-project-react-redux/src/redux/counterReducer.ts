//
type ActionType = {
    type: string;
  };
  
  const INITIAL_STATE = {
    count: 0,
  };
  
  function counterReducer(state = INITIAL_STATE, action: ActionType) {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return { count: state.count + 1 };
      default:
        return state;
    }
  }
  
  export default counterReducer;
  