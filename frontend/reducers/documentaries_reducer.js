import { RECEIVE_DOCUMENTARIES, RECEIVE_DOCUMENTARY } from '../actions/documentary_actions';

export const DocumentariesReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_DOCUMENTARIES:
      return action.documentaries;
    case RECEIVE_DOCUMENTARY:
      nextState[action.documentary.id] = action.documentary
      return nextState;
    default:
      return state;
  }
};