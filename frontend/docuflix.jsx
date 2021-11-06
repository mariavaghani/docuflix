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
// TODO: add a page to edit user account and where a user could see their watch 
// profiles
// TODO: custom validation for number of profiles per user
// TODO: add static images to AWS, update references in CSS
// TODO: add profiles to user account, add two profiles on sign up
// TODO: test up to 5 watch profiles validations
// TODO: Go over css and refactor
// TODO: add sign up button on login page
// TODO: style the dropdown and "Choose Profile" button

// LATER:
// TODO_LATER: paginate documentaries by groups that fit the page
// TODO_LATER: make a frontend show page for a documentary info panel
// if would react on query string in route and render title page with documentary
// info panel
