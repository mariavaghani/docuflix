import { combineReducers } from 'redux';
import ProfileErrorsReducer from './profile_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';


const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  profile: ProfileErrorsReducer
})

export default ErrorsReducer;