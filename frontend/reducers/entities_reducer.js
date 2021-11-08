import { combineReducers } from 'redux';
import { DocumentariesReducer } from './documentaries_reducer';
import { GenresReducer } from './genres_reducer';
import { ProfilesReducer } from './profiles_reducer';
import UsersReducer from './users_reducer';


const EntitiesReducer = combineReducers({
  users: UsersReducer,
  documentaries: DocumentariesReducer,
  genres: GenresReducer,
  profiles: ProfilesReducer
})

export default EntitiesReducer;
