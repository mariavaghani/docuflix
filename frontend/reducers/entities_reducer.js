import { combineReducers } from 'redux';
import { DocumentariesReducer } from './documentaries_reducer';
import { GenresReducer } from './genres_reducer';
import UsersReducer from './users_reducer';


const EntitiesReducer = combineReducers({
  users: UsersReducer,
  documentaries: DocumentariesReducer,
  genres: GenresReducer
})

export default EntitiesReducer;
