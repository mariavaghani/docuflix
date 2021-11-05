import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/store"
import Root from './components/root';
import { logout } from "./actions/session_actions";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // BOOTSTRAPPING THE USER TO THE WINDOW
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        id: window.currentUser.id
      }
    };
  }

  const store = configureStore(preloadedState);
  delete window.currentUser;

  // const store = configureStore();

  window.logout= () => store.dispatch(logout());

  ReactDOM.render(<Root store={store} />, root);
})


// MVP VIDEOS
// DONE: add a mute/unmute button
// DONE: make the preview to show the thumbnail while the video is loading
// DONE: add a button that expands the preview into a bigger preview card with description
// DONE: style the splash page
// TODO: add a page to edit user account and where a user could see their watch 
// profiles
// TODO: add profiles to user account, add two profiles on sign up
// TODO: Go over css and refactor

// LATER:
// TODO_LATER: paginate documentaries by groups that fit the page
// TODO_LATER: make a frontend show page for a documentary info panel
// if would react on query string in route and render title page with documentary
// info panel
