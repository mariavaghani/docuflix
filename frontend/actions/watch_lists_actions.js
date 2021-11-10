import * as WatchListApiUtil from "../utils/my_watch_list_utils";

export const RECEIVE_PROFILE_WATCHLIST = 'RECEIVE_PROFILE_WATCHLIST';
export const REMOVE_DOCUMENTARY_FROM_PROFILE_WATCHLIST = 'REMOVE_DOCUMENTARY_FROM_PROFILE_WATCHLIST';
export const ADD_DOCUMENTARY_TO_PROFILE_WATCHLIST = 'ADD_DOCUMENTARY_TO_PROFILE_WATCHLIST';

export const receiveProfileWatchList = (watchLists) => {
  return {
    type: RECEIVE_PROFILE_WATCHLIST,
    watchLists
  }
}

export const removeFromProfileWatchList = (watchListId) => {
  return {
    type: REMOVE_DOCUMENTARY_FROM_PROFILE_WATCHLIST,
    watchListId
  }
}

export const addToProfileWatchList = (watchList) => {
  return {
    type: ADD_DOCUMENTARY_TO_PROFILE_WATCHLIST,
    watchList
  }
}

export const addDocumentaryToWatchList = (profileId, documentaryId) => dispatch => {
  return WatchListApiUtil.addDocumentaryToWatchList(profileId, documentaryId)
  .then( watchList => {
    return dispatch(addToProfileWatchList(watchList))
  })
}

export const fetchProfileWatchList = (profileId) => dispatch => {
  return WatchListApiUtil.fetchProfileWatchList(profileId)
  .then( watchLists => {
    return dispatch(receiveProfileWatchList(watchLists))
  })
}

export const removeDocumentaryFromWatchList = (watchListObjId) => dispatch => {
  return WatchListApiUtil.removeDocumentaryFromWatchList(watchListObjId)
    .then(() => {
      return dispatch(removeFromProfileWatchList(watchListObjId))
  })
}