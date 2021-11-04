import { RECEIVE_DOCUMENTARY, START_LOADING_VIDEO, TOGGLE_DOCUMENTARY_INFO } from "../actions/documentary_actions";

const _null_State = {
  loadingPreview: false,
  showDocumentaryInfo: false
}

export const UIReducer = (state = _null_State, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case START_LOADING_VIDEO:
      nextState.loadingPreview = true
      return nextState;
    case RECEIVE_DOCUMENTARY:
      nextState.loadingPreview = false
      return nextState;
    case TOGGLE_DOCUMENTARY_INFO:
      nextState.showDocumentaryInfo = !nextState.showDocumentaryInfo
      return nextState;
    default:
      return state;
  }
};