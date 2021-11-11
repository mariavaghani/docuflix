import { CLEAR_FILTERS, UPDATE_GENRES, UPDATE_TITLE_QUERY } from '../actions/filter_actions';

const defaultState = {
  genres: [],
  titleQuery: ""
}

export const FiltersReducer = (state = defaultState, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case UPDATE_GENRES:
      nextState.genres = action.genres;
      return nextState;
    case UPDATE_TITLE_QUERY:
      nextState.titleQuery = action.titleQuery;
      return nextState;
    case CLEAR_FILTERS:
      return defaultState;
    default:
      return state;
  }
};