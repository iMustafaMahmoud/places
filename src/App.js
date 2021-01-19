import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// import User from "./user/pages/Users";
// import NewPlaces from "./places/pages/NewPlaces";
// import UserPlaces from "./places/pages/UserPlaces";
// import UpdatePlaces from "./places/pages/UpdatePlaces";
// import Auth from "./user/pages/Auth";
import MainNavigation from "./shared/components/navigation/MainNavigation";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import { useAuth } from "./shared/hooks/auth-hook";

const User = React.lazy(() => import("./user/pages/Users.js"));
const NewPlaces = React.lazy(() => import("./places/pages/NewPlaces"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const UpdatePlaces = React.lazy(() => import("./places/pages/UpdatePlaces"));
const Auth = React.lazy(() => import("./user/pages/Auth"));

const App = () => {
  useAuth();

  const { token } = useSelector((state) => state);

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route exact path="/">
          <User />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new">
          <NewPlaces />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/">
          <User />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <Router>
      <MainNavigation />
      <main>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          {routes}
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
