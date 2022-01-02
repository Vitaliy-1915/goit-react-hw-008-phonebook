import React from 'react';
import s from '../LoginView/LoginView.module.css';

function LoginView() {
  return (
    <div>
      <form
        //   onSubmit={handleSubmit}
        autoComplete="off"
        className={s.form}
      >
        <label className={s.label}>
          E-mail
          <input
            className={s.input}
            type="email"
            name="email"
            //   value={email}
            //   onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            //   value={password}
            //   onChange={handleChange}
          />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginView;
