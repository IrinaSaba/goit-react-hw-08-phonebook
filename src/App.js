import AppBar from './components/AppBar/AppBar.jsx';
// import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HomeView from './Views/HomeView';
import RegisterView from './Views/RegisterView/RegisterView.jsx';
import LoginView from './Views/LoginView/LoginView.jsx';
import ContactsView from './Views/ContactsView/ContactsView.jsx';

// const HomePage = lazy(()=> import("./Views/HomePage"))
// const MoviesPages = lazy(()=> import("./Views/MoviesPages"))
// const MovieDetailsPage = lazy(()=> import( './components/MoviesDetailsPage/MoviesDetailsPage'))

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  return (
    <>
      <AppBar />
      {/* <Suspense
        fallback={<h1>Wait a second, look at the sky during loading...</h1>}
      > */}
      <Switch>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/contacts">{/* <ContactsView /> */}</Route>
        {/* <Route path="/usermenu">
          <UserMenu />
        </Route> */}
        <Route exact path="/">
          {/* <HomeView /> */}
        </Route>
        <Redirect to="/" />
      </Switch>
      {/* </Suspense> */}
    </>
  );
}
