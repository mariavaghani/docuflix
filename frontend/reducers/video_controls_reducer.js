import { TOGGLE_MUTE_VIDEO } from "../actions/video_controls_actions";

const _null_State = {
  muted: true,
}

export const VideoControlsReducer = (state = _null_State, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case TOGGLE_MUTE_VIDEO:    
      nextState.muted = !nextState.muted;
      return nextState;
    
    default:
      return state;
  }
};