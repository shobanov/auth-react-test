import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setLoginAC } from '../../Redux/auth-reduser';
import styles from './Auth.module.css';

const LOGIN = 'developer21';
const PASS = '123456';

function Auth() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuth = LOGIN === login && PASS === password;

  const onSubmitButtonHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isAuth) {
      dispatch(setLoginAC(login));
      history.push('/profile');
    };
  };

  const loginValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const passwordValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Sign in</h2>
        </div>
        <form className={styles.form} onSubmit={onSubmitButtonHandler}>
          <div className={styles.input_form}>
            <input
              type="login"
              placeholder="Login"
              value={login}
              onChange={loginValueHandler}
            />
          </div>
          <div className={styles.input_form}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={passwordValueHandler}
            />
          </div>
          <div className={styles.buttonForm}>
            <button disabled={!isAuth} type="submit">Войти</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Auth;
