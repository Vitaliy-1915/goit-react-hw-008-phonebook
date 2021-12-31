import React from 'react';
import GenNavigation from './GenNavigation/GenNavigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import s from '../AppBar/AppBar.module.css';

function AppBar() {
  return (
    <header className={s.AppBar}>
      <GenNavigation />
      <AuthNavigation />
    </header>
  );
}

export default AppBar;
