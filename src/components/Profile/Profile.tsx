import { useSelector } from 'react-redux';
import { InitialStateType } from '../../Redux/auth-reduser';
import { AppRootStateType } from '../../Redux/store';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  const { login } = useSelector<AppRootStateType, InitialStateType>(state => state.auth);
  return <h2 className={styles.login}>Hello, {login}</h2>;
};

export default Profile;