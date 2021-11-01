import { UPDATE_GENRES } from '../actions/filter_actions';

const defaultState = {
  genres: [],
}

export const FiltersReducer = (state = defaultState, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case UPDATE_GENRES:
      nextState.genres = action.genres;
      return nextState;

    default:
      return state;
  }
};