import React from 'react';
import GenNavigation from './GenNavigation/GenNavigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserMenu from './UserMenu/UserMenu';
import Logo from './Logo/Logo';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/auth/auth-selectors';
import { getLoggedIn } from '../../redux/auth/auth-selectors';
import s from '../AppBar/AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(getLoggedIn);

  const userEmail = useSelector(getUserEmail);

  return (
    <header className={s.AppBar}>
      <Logo />
      <GenNavigation />
      {isLoggedIn && userEmail !== undefined ? (
        <UserMenu />
      ) : (
        <AuthNavigation />
      )}
    </header>
  );
}

export default AppBar;
