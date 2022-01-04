import './App.css';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { isFetchingUser, checkToken } from './redux/auth/auth-selectors';
import {
  RequireAuth,
  GeneralAccess,
} from './Components/AppBar/UserMenu/CheckAccess';
import AppBar from './Components/AppBar/AppBar';
import HomeView from './views/HomeView/HomeView';
import ContactsView from './views/ContactsView/ContactsView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';

// const HomeView = lazy(() =>
//   import('views/HomeView' /*webpackChunkName: "home-view" */),
// );
// const LoginView = lazy(() =>
//   import('views/LoginView' /*webpackChunkName: "login-view" */),
// );
// const ContactsView = lazy(() =>
//   import('views/ContactsView' /*webpackChunkName: "contacts-view" */),
// );
// const RegisterView = lazy(() =>
//   import('views/RegisterView' /*webpackChunkName: "register-view" */),
// );

function App() {
  const dispatch = useDispatch();
  const userLoading = useSelector(isFetchingUser);
  const getToken = useSelector(checkToken);

  useEffect(() => {
    if (getToken === null) {
      return;
    } else {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, getToken]);

  return (
    <div className="App">
      {!userLoading && (
        <>
          <AppBar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route
                path="/mycontacts"
                element={
                  <RequireAuth redirectTo="/login">
                    <ContactsView />
                  </RequireAuth>
                }
              />
              <Route
                path="/signup"
                element={
                  <GeneralAccess redirectTo="/">
                    <RegisterView />
                  </GeneralAccess>
                }
              />
              <Route
                path="/login"
                element={
                  <GeneralAccess redirectTo="/">
                    <LoginView />
                  </GeneralAccess>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
