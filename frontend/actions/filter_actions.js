import { fetchDocumentaries } from "./documentary_actions";
import { fetchGenres } from "./genre_actions";
import { fetchProfileWatchList } from "./watch_lists_actions";

export const UPDATE_GENRES = 'UPDATE_GENRES';
export const UPDATE_TITLE_QUERY = 'UPDATE_TITLE_QUERY';
export const APPLY_USER_FILTERS = 'APPLY_USER_FILTERS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';


export const applyUserFilters = (userFilter) => {
  return {
    type: APPLY_USER_FILTERS,
    userFilter
  }
}
export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
    
  }
}


export const updateGenres = (genres) => {
  return {
    type: UPDATE_GENRES,
    genres
  }
}
export const updateTitleQuery = (titleQuery) => {
  return {
    type: UPDATE_TITLE_QUERY,
    titleQuery
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

export function updateTitlesQueryFilter(filter, value) {

  return (dispatch, getState) => {
    dispatch(clearFilters())
    dispatch(changeFilter(filter, value));
    
    return fetchDocumentaries(getState().filters)(dispatch);
    // delicious curry!
  };
}

