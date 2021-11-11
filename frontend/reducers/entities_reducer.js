import { combineReducers } from 'redux';
import { DocumentariesReducer } from './documentaries_reducer';
import { FeaturedDocumentariesReducer } from './featured_documentary_reducer';
import { GenresReducer } from './genres_reducer';
import { ProfilesReducer } from './profiles_reducer';
import { RatinsReducer } from './ratings_reducer';
import UsersReducer from './users_reducer';
import { WatchListsReducer } from './watch_lists_reducer';


const EntitiesReducer = combineReducers({
  users: UsersReducer,
  documentaries: DocumentariesReducer,
  genres: GenresReducer,
  profiles: ProfilesReducer,
  watchLists: WatchListsReducer,
  ratings: RatinsReducer,
  featuredDocumentary: FeaturedDocumentariesReducer,
})

export default EntitiesReducer;
