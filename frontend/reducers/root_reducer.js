import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
// import { UIReducer } from "./ui_reducer";

export const RootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  // filters: UIReducer,
  errors: ErrorsReducer
})