import { RECEIVE_USER_PROFILE, RECEIVE_USER_PROFILES } from "../actions/profiles_actions";


export const ProfilesReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_USER_PROFILES:
      return action.profiles;
    case RECEIVE_USER_PROFILE:
      nextState[action.profile.id] = action.profile;
      return nextState;

    default:
      return state;
  }
};