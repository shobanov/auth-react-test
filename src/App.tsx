import Auth from "./components/Auth/Auth";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { useSelector } from "react-redux";
import { AppRootStateType } from "./Redux/store";
import { InitialStateType } from "./Redux/auth-reduser";

const App: React.FC = () => {
  const { login } = useSelector<AppRootStateType, InitialStateType>(state => state.auth);

  return (
    <BrowserRouter basename="/auth-react-test">
      <Route exact path='/profile' render={ () => login ? <Profile /> : <Redirect to={'/'} /> } />
      <Route exact path='/' render={ () => <Auth /> } />
    </BrowserRouter>
  );
};

export default App;