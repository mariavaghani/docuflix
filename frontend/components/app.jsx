import React, { useEffect } from "react";
import { AuthRoute, ProtectedBoolRoute, ProtectedRoute } from "../utils/route_utils";
import SplashContainer from "./splash/splash_container";
import BrowseContainter from "./browse/browse_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Redirect, Switch } from "react-router";
import LoginPageContainer from "./session/login_page";
import SignupPageContainer from "./session/signup_page";
import AccountPageContainer from "./account/account_page";
import ProfileIndexContainer from "./profile/profile_index";
import WatchPageContainer from "./watch/watch_page";
import SearchResultsContainter from "./browse/search_results";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";


const App = (props) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const lang = localStorage.getItem('docuflixLang')
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang)
    }
  }, []);
  
  return (
    <div>
      <header>
        <ProtectedRoute exact={false} path="/browse" component={NavBarContainer}/>
        <ProtectedRoute exact={true} path="/search" component={NavBarContainer}/>
        <ProtectedRoute exact={false} path="/YourAccount" component={NavBarContainer}/>
      </header>
  
      <Switch>
        <ProtectedBoolRoute exact={true} path="/browse" 
          componentTrue={BrowseContainter} 
          componentFalse={ProfileIndexContainer}/>
        <ProtectedBoolRoute exact={true} path="/search"
          componentTrue={SearchResultsContainter} 
          componentFalse={ProfileIndexContainer}/>
        <ProtectedBoolRoute exact={false} path='/watch/:documentaryId' 
          componentTrue={WatchPageContainer}
          componentFalse={ProfileIndexContainer}/>
        <ProtectedRoute exact={false} path="/YourAccount" component={AccountPageContainer}/>
        <ProtectedRoute exact={false} path="/profiles/manage" component={ProfileIndexContainer}/>
        <AuthRoute exact={true} path="/login" component={LoginPageContainer} />
        <AuthRoute exact={true} path="/signup" component={SignupPageContainer} />
        <AuthRoute exact={true} path="/" component={SplashContainer}/>
        {/* <Redirect to="/" /> */}
        <Redirect to="/browse" />
      </Switch>
   
  
    </div>
  );
}


export default App;