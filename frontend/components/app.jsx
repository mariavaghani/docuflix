import React from "react";
import { AuthRoute, ProtectedRoute, ToAuthRoute } from "../utils/route_utils";
import SplashContainer from "./splash/splash_container";
import BrowseContainter from "./browse/browse_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Redirect, Switch } from "react-router";
import { LoginPage } from "./session/login_page";
import { SignupPage } from "./session/signup_page";

const App = () => (
  <div>
    <header>
      <ProtectedRoute path="/browse" component={NavBarContainer}/>
    </header>

      {/* <ToAuthRoute exact={false} path="" /> */}
    <Switch>
      <ProtectedRoute exact={false} path="/browse" component={BrowseContainter}/>
      <AuthRoute exact={true} path="/login" component={LoginPage} />
      <AuthRoute exact={true} path="/signup" component={SignupPage} />
      <AuthRoute exact={true} path="/" component={SplashContainer}/>
      {/* <Redirect to="/" /> */}
      <Redirect to="/browse" />
    </Switch>
 

  </div>
);

export default App;