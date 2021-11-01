import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import SplashContainer from "./splash/splash_container";
import {Browse} from "./browse/browse_container";
import NavBarContainer from "./nav_bar/nav_bar_container";


const App = () => (
  <div>
    <header>
      <ProtectedRoute path="/browse" component={NavBarContainer}/>
    </header>

    {/* APP WHEN LOGGED IN */}
    <ProtectedRoute path="/browse" component={Browse}/>

    {/* APP DESIGN WHEN LOGGED OUT */}

    <AuthRoute path="/" component={SplashContainer}/>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;