import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...routeProps }) {
  return <Route {...routeProps}>{children}</Route>;
}
