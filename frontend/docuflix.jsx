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

// TODO: learn more about bootstrapping user to the window, seems unsafe
// TODO: make 



// GOAL: create a component that would render index of documentaries, displaying
// title and rating