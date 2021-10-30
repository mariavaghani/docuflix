import { RECEIVE_ALL_DOCUMENTARIES } from '../actions/documentary_actions';

export const DocumentariesReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_ALL_DOCUMENTARIES:

      return action.documentaries;

    default:
      return state;
  }
};