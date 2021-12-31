import React from 'react';

function RegisterView() {
  return (
    <div>
      <form
        //   onSubmit={handleSubmit}
        autoComplete="off"
        //   className={s.SignupView__form}
      >
        <label
        // className={s.SignupView__item}
        >
          Name
          <input
            //   className={s.SignupView__input}
            type="text"
            name="name"
            //   value={name}
            //   onChange={handleChange}
          />
        </label>

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

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default RegisterView;
