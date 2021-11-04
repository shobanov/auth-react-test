import Auth from "./components/Auth/Auth";
import { Route, Redirect, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";

const App: React.FC = () => {

  return (
    <>
      <Route path='/'>
        <Redirect to='/auth'/>
      </Route>
      <Switch>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default App;