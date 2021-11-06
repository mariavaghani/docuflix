import React from "react";
import { AuthRoute, ProtectedRoute, ToAuthRoute } from "../utils/route_utils";
import SplashContainer from "./splash/splash_container";
import BrowseContainter from "./browse/browse_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Redirect, Switch } from "react-router";
import { LoginPage } from "./session/login_page";
import SignupPageContainer from "./session/signup_page";
import AccountPageContainer from "./account/account_page";

const App = () => (
  <div>
    <header>
      <ProtectedRoute exact={false} path="/browse" component={NavBarContainer}/>
      <ProtectedRoute exact={false} path="/YourAccount" component={NavBarContainer}/>
    </header>

      {/* <ToAuthRoute exact={false} path="" /> */}
    <Switch>
      <ProtectedRoute exact={false} path="/browse" component={BrowseContainter}/>
      <ProtectedRoute exact={false} path="/YourAccount" component={AccountPageContainer}/>
      <AuthRoute exact={true} path="/login" component={LoginPage} />
      <AuthRoute exact={true} path="/signup" component={SignupPageContainer} />
      <AuthRoute exact={true} path="/" component={SplashContainer}/>
      {/* <Redirect to="/" /> */}
      <Redirect to="/browse" />
    </Switch>
 

  </div>
);

export default App;