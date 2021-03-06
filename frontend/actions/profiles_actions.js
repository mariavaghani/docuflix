import * as ProfileAPIUtil from "../utils/profile_utils";
import { fetchDocumentaries } from "./documentary_actions";
import { applyUserFilters, updateUserProfileFilter } from "./filter_actions";

export const RECEIVE_SELECTED_PROFILE = 'RECEIVE_SELECTED_PROFILE';
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES';
export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export const REMOVE_USER_PROFILE = 'REMOVE_USER_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';
export const CLEAR_PROFILE_ERRORS = 'CLEAR_PROFILE_ERRORS';

export const receiveSelectedProfile = (profileId) => {
  return {
    type: RECEIVE_SELECTED_PROFILE,
    profileId
  }
}

export const receiveUserProfiles = (profiles) => {
  return {
    type: RECEIVE_USER_PROFILES,
    profiles
  }
}

export const receiveUserProfile = (profile) => {
  return {
    type: RECEIVE_USER_PROFILE,
    profile
  }
}

export const receiveProfileErrors = (errors) => {
  return {
    type: RECEIVE_PROFILE_ERRORS,
    errors
  }
}

export const clearProfileErrors = (errors) => {
  return {
    type: CLEAR_PROFILE_ERRORS,
    errors
  }
}

export const removeUserProfile = (profileId) => {
  return {
    type: REMOVE_USER_PROFILE,
    profileId
  }
}


export const fetchUserProfiles = (userId) => dispatch => {
  return ProfileAPIUtil.fetchUserProfiles(userId)
  .then( profiles => {
    return dispatch(receiveUserProfiles(profiles))
  })
}

export const fetchUserProfile = (profileId) => dispatch => {
  return ProfileAPIUtil.fetchUserProfile(profileId)
  .then( profile => {
    return dispatch(receiveUserProfile(profile))
  })
}

export const deleteUserProfile = (profileId) => dispatch => {
  return ProfileAPIUtil.deleteUserProfile(profileId)
    .then( () => {
      return dispatch(removeUserProfile(profileId))
    })
}

export const createUserProfile = (profileForm) => dispatch => {
  return ProfileAPIUtil.createUserProfile(profileForm)
    .then(profile => {
      return dispatch(receiveUserProfile(profile))
    },
    (res) => dispatch(receiveProfileErrors(res.responseJSON)))
}

export const updateUserProfile = (profileForm) => dispatch => {
  return ProfileAPIUtil.updateUserProfile(profileForm)
    .then(profile => {
      return dispatch(receiveUserProfile(profile))
    },
      (res) => dispatch(receiveProfileErrors(res.responseJSON)))
}

export const switchUserProfile = (profileId, userProfileFilters) => (dispatch, getState) => {
  dispatch(receiveSelectedProfile(profileId));
  return updateUserProfileFilter(applyUserFilters, userProfileFilters)(dispatch, getState)
}
