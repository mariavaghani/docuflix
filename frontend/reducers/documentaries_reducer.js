import { RECEIVE_DOCUMENTARIES, RECEIVE_DOCUMENTARY, RECEIVE_FEATURED_DOCUMENTARY } from '../actions/documentary_actions';



export const DocumentariesReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_DOCUMENTARIES:
      return {
        ...action.documentaries,
        ...nextState
      };
      // return action.documentaries;
    case RECEIVE_DOCUMENTARY:
      nextState[action.documentary.id] = action.documentary
      return nextState;
    case RECEIVE_FEATURED_DOCUMENTARY:
      nextState[action.documentary.id] = action.documentary;
      return nextState;
    default:
      return state;
  }
};