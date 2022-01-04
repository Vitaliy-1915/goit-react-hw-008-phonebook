import React from 'react';
import { logOut } from '../../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../../redux/auth/auth-selectors';

function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <div>
      <span>Hello, {userEmail}</span>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}

export default UserMenu;
