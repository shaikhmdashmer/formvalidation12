                      
import './App.css';
import AddUser from './Component/AddUser';
import From from './Component/From';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <Switch>
      <div className="App">
        <Route path="/">
          <From/>
        </Route>
        <Route path="/AddUser">
           <AddUser/>
    </Route>
     
     
    </div>
      </Switch>
      </Router>
   
  );
}

export default App;
