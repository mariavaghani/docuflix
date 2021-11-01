import { fetchDocumentaries } from "./documentary_actions";
import { fetchGenres } from "./genre_actions";

export const UPDATE_GENRES = 'UPDATE_GENRES';





export const updateGenres = (genres) => {
  return {
    type: UPDATE_GENRES,
    genres
  }
}

const changeFilter = (filter, value) => {
  
  return filter(value);
}

export function updateDocumentariesFilter(filter, value) {

  return (dispatch, getState) => {

    dispatch(changeFilter(filter, value));
    return fetchDocumentaries(getState().filters)(dispatch);
    // delicious curry!
  };
}

export function updateGenresFilter(filter, value) {

  return (dispatch, getState) => {

    dispatch(changeFilter(filter, value));

    return fetchGenres(getState().filters)(dispatch).then((genres) => fetchDocumentaries(genres.genres)(dispatch));
    // delicious curry!
  };
}