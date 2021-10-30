import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import SplashContainer from "./splash/splash_container";
import {Browse} from "./browse/browse_container";


const App = () => (
  <div>
    <header>
      <h1>Docuflix</h1>
      <AuthRoute path="/" component={SplashContainer}/>
      <ProtectedRoute path="/browse" component={Browse}/>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;