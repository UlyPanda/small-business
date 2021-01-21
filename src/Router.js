import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import Login from './containers/Login';
import BusinessList from './containers/BusinessList';
import Details from './containers/Details';
import AddBusiness from './containers/AddBusiness';


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  }
  
  const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
      <Route
      {...rest}
      render={(props) => checkAuth()
        ? <Component {...props} />
        : <Redirect to="/login" />
      }
      />
    )
  };

const Router = () => {
    return (
        <Switch>
            <Route path="/businesslist" component={BusinessList} />
            <Route path="/login" component={Login} />
            <Route path="/details/:id" component={Details} />
            <ProtectedRoute path="/addbusiness" component={AddBusiness} />
        </Switch>
    )
}

export default Router;