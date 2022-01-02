import React from 'react';
import GenNavigation from './GenNavigation/GenNavigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserMenu from './UserMenu/UserMenu';
import Logo from './Logo/Logo';
import s from '../AppBar/AppBar.module.css';

function AppBar() {
  return (
    <header className={s.AppBar}>
      <Logo />
      <GenNavigation />
      <UserMenu />
      <AuthNavigation />
    </header>
  );
}

export default AppBar;
