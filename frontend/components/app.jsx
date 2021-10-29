import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
// import SearchContainer from "./bench/search_container";

// import {Route} from "react-router-dom";
// import BenchFormContainer from "./bench_form/bench_form_container";

const App = () => (
  <div>
    <header>
      <h1>Docuflix</h1>
      <ProtectedRoute path="/" component={NavBarContainer}/>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;