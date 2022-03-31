import AppBar from './components/AppBar/AppBar.js';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// import HomeView from './Views/HomeView';

const RegisterView = lazy(() =>
  import('./Views/RegisterView/RegisterView.jsx')
);
const LoginView = lazy(() => import('./Views/LoginView/LoginView.jsx'));
const ContactView = lazy(() => import('./Views/ContactView/ContactView.jsx'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense
          fallback={<h1>Wait a second, look at the sky during loading...</h1>}
        >
          <Switch>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>
            <PublicRoute exact path="/">
              {/* <HomeView /> */}
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </>
    )
  );
}
