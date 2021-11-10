import * as GenreAPIUtil from "../utils/genre_api_utils";

export const RECEIVE_GENRES = 'RECEIVE_GENRES';

export const receiveGenres = (genres) => {
  return {
    type: RECEIVE_GENRES,
    genres
  }
}

export const fetchGenres = (filters) => dispatch => {
  return GenreAPIUtil.fetchGenres(filters)
  .then( genres => {
    return dispatch(receiveGenres(genres))
  })
}