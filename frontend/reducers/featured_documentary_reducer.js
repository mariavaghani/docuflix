import { RECEIVE_FEATURED_DOCUMENTARY } from "../actions/documentary_actions";


export const FeaturedDocumentariesReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_FEATURED_DOCUMENTARY:
      return action.documentary;
    default:
      return state;
  }
};