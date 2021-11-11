import { RECEIVE_MORE_PROFILE_RATINGS, RECEIVE_PROFILE_RATINGS, RECEIVE_RATING, REMOVE_RATING_FROM_DOCUMENTARY } from "../actions/rating_actions";


export const RatinsReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PROFILE_RATINGS:
      return action.ratings;
    case RECEIVE_RATING:
      nextState[action.rating.id] = action.rating;
      return nextState;
    case REMOVE_RATING_FROM_DOCUMENTARY:
      delete nextState[action.ratingId];
      return nextState;
    case RECEIVE_MORE_PROFILE_RATINGS:
      Object.values(action.ratings).forEach(rating => {
        nextState[rating.id] = rating;
      });
      return nextState;

    default:
      return state;
  }
};