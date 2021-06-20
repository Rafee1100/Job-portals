import './App.css';
import Home from './components/Home/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Jobs from './components/Jobs/Jobs';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path="/jobs">
            <Jobs/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
