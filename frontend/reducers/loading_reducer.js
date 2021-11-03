import { RECEIVE_DOCUMENTARY, START_LOADING_VIDEO } from "../actions/documentary_actions";

const _null_State = {
  loadingPreview: false
}

export const LoadingReducer = (state = _null_State, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case START_LOADING_VIDEO:
      nextState.loadingPreview = true
      return nextState;
    case RECEIVE_DOCUMENTARY:
      return _null_State;

    default:
      return state;
  }
};