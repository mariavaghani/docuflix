import { RECEIVE_DOCUMENTARY, START_LOADING_VIDEO, TOGGLE_DOCUMENTARY_INFO } from "../actions/documentary_actions";
import { REMOVING_DOCUMENTARY_IN_FOCUS, SETTING_DOCUMENTARY_IN_FOCUS } from "../actions/video_controls_actions";

const _null_State = {
  loadingPreview: false,
  showDocumentaryInfo: false,
  documentaryInFocus: null
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
    case SETTING_DOCUMENTARY_IN_FOCUS:
      nextState.documentaryInFocus = action.documentaryId;
      return nextState;
    case REMOVING_DOCUMENTARY_IN_FOCUS:
      nextState.documentaryInFocus = null;
      return nextState;
    default:
      return state;
  }
};