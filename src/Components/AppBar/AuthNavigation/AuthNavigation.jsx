import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../AuthNavigation/AuthNavigation.module.css';

function AuthNavigation() {
  return (
    <ul className={s.AuthNavigation}>
      <li className={s.li}>
        <NavLink
          to="/signup"
          className="link"
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        >
          SIGN UP
        </NavLink>
      </li>
      <li className={s.li}>
        <NavLink
          to="/login"
          className="link"
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        >
          LOGIN
        </NavLink>
      </li>
    </ul>
  );
}

export default AuthNavigation;
