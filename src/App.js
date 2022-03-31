import AppBar from './components/AppBar/AppBar.js';
import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

const RegisterView = lazy(() =>
  import('./Views/RegisterView/RegisterView.jsx')
);
const LoginView = lazy(() => import('./Views/LoginView/LoginView.jsx'));
const ContactView = lazy(() => import('./Views/ContactView/ContactView.jsx'));

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense
        fallback={<h1>Wait a second, look at the sky during loading...</h1>}
      >
        {!isLoggedIn ? (
          <Switch>
            <Route exact path="/">
              {/* <HomeView /> */}
            </Route>
            <Route path="/register">
              <RegisterView />
            </Route>
            <Route path="/login">
              <LoginView />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/contacts">
              <ContactView />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </Suspense>
    </>
  );
}
