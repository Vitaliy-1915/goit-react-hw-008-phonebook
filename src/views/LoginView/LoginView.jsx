import React from 'react';

function LoginView() {
  return (
    <div>
      <form
        //   onSubmit={handleSubmit}
        autoComplete="off"
        //   className={style.LoginView__form}
      >
        <label
        // className={s.SignupView__item}
        >
          E-mail
          <input
            //   className={s.SignupView__input}
            type="email"
            name="email"
            //   value={email}
            //   onChange={handleChange}
          />
        </label>

        <label
        // className={s.SignupView__item}
        >
          Password
          <input
            //   className={s.SignupView__input}
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
