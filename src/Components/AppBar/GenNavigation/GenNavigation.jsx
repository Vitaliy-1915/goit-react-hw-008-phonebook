import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../GenNavigation/GenNavigation.module.css';

function GenNavigation() {
  return (
    <ul className={s.GenNavigation}>
      <li className={s.li}>
        <NavLink
          to="/"
          className="link"
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        >
          HOME
        </NavLink>
      </li>
      <li className={s.li}>
        <NavLink
          to="/mycontacts"
          className="link"
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        >
          MY CONTACTS
        </NavLink>
      </li>
    </ul>
  );
}

export default GenNavigation;
