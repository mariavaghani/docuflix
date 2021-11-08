import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id),
  profileSelected: Boolean(state.session.selectedProfile)
});

const Auth = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Redirect to='/browse' /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to='/signup' />
    )}
  />
);

const Bool = ({ loggedIn, profileSelected, path, componentTrue: ComponentTrue,
  componentFalse: ComponentFalse, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? (profileSelected ? <ComponentTrue {...props} /> : <ComponentFalse {...props} /> ) : <Redirect to='/signup' />
    )}
  />
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ProtectedBoolRoute = withRouter(connect(mapStateToProps)(Bool));