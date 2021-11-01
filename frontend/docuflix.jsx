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



// TODO: research modals? expand a documentary on hover, expand into another 
// modal upon pressing a button on the first modal
// TODO: create a demo user with a button

// GOAL: have a documentary to expand on hover to display more information