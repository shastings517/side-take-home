import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from './Loader';
// import { NotFound } from '../pages/NotFound';

// currently React.lazy only works with default exports
const Home = React.lazy(() => import('../pages/Home'));
const PropertyListings = React.lazy(() => import('../pages/PropertyListings'));
const SavedListings = React.lazy(() => import('../pages/SavedListings'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

export default function Routes({ userId }) {
  return (
    <Suspense fallback={Loader()}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/listings'>
          <PropertyListings userId={userId} />
        </Route>
        <Route path='/saved'>
          <SavedListings userId={userId} />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

// export { Routes };
