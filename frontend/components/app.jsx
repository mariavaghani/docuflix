import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute, ToAuthRoute } from "../utils/route_utils";
import SplashContainer from "./splash/splash_container";
import BrowseContainter from "./browse/browse_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Switch } from "react-router";


const App = () => (
  <div>
    <header>
      <ProtectedRoute path="/browse" component={NavBarContainer}/>
    </header>

      {/* <ToAuthRoute exact={false} path="" /> */}
    <Switch>
      <ProtectedRoute exact={false} path="/browse" component={BrowseContainter}/>
      <AuthRoute exact={true} path="/login" component={LoginFormContainer} />
      <AuthRoute exact={true} path="/signup" component={SignupFormContainer} />
      <AuthRoute exact={false} path="/" component={SplashContainer}/>

    </Switch>
 

  </div>
);

export default App;