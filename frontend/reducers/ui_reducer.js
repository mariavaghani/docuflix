import { combineReducers } from 'redux';
import { LoadingReducer } from './loading_reducer';

export const UIReducer = combineReducers({
  loading: LoadingReducer
})