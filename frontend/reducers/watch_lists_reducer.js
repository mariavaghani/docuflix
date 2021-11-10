import { ADD_DOCUMENTARY_TO_PROFILE_WATCHLIST, RECEIVE_PROFILE_WATCHLIST, REMOVE_DOCUMENTARY_FROM_PROFILE_WATCHLIST } from "../actions/watch_lists_actions";


export const WatchListsReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PROFILE_WATCHLIST:
      return action.watchLists;
    case ADD_DOCUMENTARY_TO_PROFILE_WATCHLIST:
      nextState[action.watchList.id] = action.watchList;
      return nextState;
    case REMOVE_DOCUMENTARY_FROM_PROFILE_WATCHLIST:
      delete nextState[action.watchListId];
      return nextState;
    

    default:
      return state;
  }
};