import { RECEIVE_GENRES } from '../actions/genre_actions';

export const GenresReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_GENRES:

      return action.genres;

    default:
      return state;
  }
};