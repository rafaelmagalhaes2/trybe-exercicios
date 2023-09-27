// ./src/reducers/index.ts
import { combineReducers } from 'redux';
import counterReducer from '../counterReducer/counterReducer';

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;