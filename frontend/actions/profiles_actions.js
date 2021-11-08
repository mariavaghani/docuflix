import * as ProfileAPIUtil from "../utils/profile_utils";
import { fetchDocumentaries } from "./documentary_actions";
import { applyUserFilters, updateUserProfileFilter } from "./filter_actions";

export const RECEIVE_SELECTED_PROFILE = 'RECEIVE_SELECTED_PROFILE';
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES';
export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

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

export const createUserProfile = (profileForm) => dispatch => {
  return ProfileAPIUtil.createUserProfile(profileForm)
    .then(profile => {
      return dispatch(receiveUserProfile(profile))
    })
}

export const updateUserProfile = (profileForm) => dispatch => {
  return ProfileAPIUtil.updateUserProfile(profileForm)
    .then(profile => {
      return dispatch(receiveUserProfile(profile))
    })
}

export const switchUserProfile = (profileId, userProfileFilters) => (dispatch, getState) => {
  dispatch(receiveSelectedProfile(profileId));
  return updateUserProfileFilter(applyUserFilters, userProfileFilters)(dispatch, getState);
}
