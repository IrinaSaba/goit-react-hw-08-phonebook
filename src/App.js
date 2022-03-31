import AppBar from './components/AppBar/AppBar.js';
import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from './redux/auth/auth-operations';

const RegisterView = lazy(() =>
  import('./Views/RegisterView/RegisterView.jsx')
);
const LoginView = lazy(() => import('./Views/LoginView/LoginView.jsx'));
const ContactView = lazy(() => import('./Views/ContactView/ContactView.jsx'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //   dispatch(getContacts());
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense
        fallback={<h1>Wait a second, look at the sky during loading...</h1>}
      >
        <Switch>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/contacts">
            <ContactView />
          </Route>
          <Route exact path="/">
            {/* <HomeView /> */}
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
