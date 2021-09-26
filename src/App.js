import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="wrapper">
      <div className="">
        <Switch>
          <Route exact path={['/', '/home']} component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route path="/user" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
