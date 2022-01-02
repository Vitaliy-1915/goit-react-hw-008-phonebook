import React from 'react';

function UserMenu() {
  return (
    <div>
      <span
      // className={s.UserMenu__user}
      >
        {' '}
        Hello,
        {/* {userEmail} */}
      </span>
      {/* <img
                // className={s.UserMenu__photo}
                alt="default avatar" src={avatar}
            /> */}
      <button
      // onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
