import { fetchDocumentaries } from "./documentary_actions";
import { fetchGenres } from "./genre_actions";
import { fetchProfileWatchList } from "./watch_lists_actions";

export const UPDATE_GENRES = 'UPDATE_GENRES';
export const APPLY_USER_FILTERS = 'APPLY_USER_FILTERS';


export const applyUserFilters = (userFilter) => {
  return {
    type: APPLY_USER_FILTERS,
    userFilter
  }
}


export const updateGenres = (genres) => {
  return {
    type: UPDATE_GENRES,
    genres
  }
}

const changeFilter = (filter, value) => {
  
  return filter(value);
}

export function updateUserProfileFilter(filter, value) {

  return (dispatch, getState) => {
    
    dispatch(changeFilter(filter, value));
    return fetchDocumentaries(getState().filters)(dispatch, getState)
      .then((action) => {
        
        updateGenresFilter(updateGenres, action.documentaries.genreIds)(dispatch, getState)
          .then((obj) => {
            
            console.log(`obj: `, obj);
            console.log(`getState().session.selectedProfile: `, getState().session.selectedProfile);
            
            fetchProfileWatchList(getState().session.selectedProfile)(dispatch)
          } )
      })
    // delicious curry!
  };
}

export function updateGenresFilter(filter, value) {

  return (dispatch, getState) => {
    
    dispatch(changeFilter(filter, value));
    
    return fetchGenres(getState().filters)(dispatch);
    // delicious curry!
  };
}