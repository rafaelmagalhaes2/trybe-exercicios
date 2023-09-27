// ./src/redux/actions/index.ts

export const actionCreator = (increment = 1) => ({ 
    type: 'INCREMENT_COUNTER',
    payload: increment,
  });
  