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
// TODO: add errors to edit account page
// TODO: Go over css and refactor
// TODO: add sign up button on login page
// TODO: style the dropdown and "Choose Profile" button, little image next to name
// TODO: stop scroll of main page when it is time to scroll modal
// TODO: add linkedIn and Github links
// TODO: style errors on sign in / sign up pages

// LATER:
// TODO_LATER: make a frontend show page for a documentary info panel
// if would react on query string in route and render title page with documentary
// info panel
