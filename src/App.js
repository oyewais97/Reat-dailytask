import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './component/landing/home';
import FormUser from './component/landing/userform';
import TodoList from './component/todoapp/Todolist';
import FormShow from './component/landing/formshow';
import Firsts from './component/yes/firsts';
import Propsfirstdefaul from './component/yes/propFirst';
import StatePro from './component/yes/stpro';
import Compapi from './component/yes/compapi';
import Lifecycle from './component/yes/lifycycle';

function App() {
  return (
    <Router>
      
          <Route exact path="/" component={Home}/>
          <Route exact path="/userform" component={FormUser}/>
          <Route  exact path="/Todolist" component={TodoList}/>
          <Route  exact path="/formshow" component={FormShow}/>
          <Route  exact path="/firsts" component={Firsts}/>
          <Route  exact path="/propFirst" component={Propsfirstdefaul}/>
          <Route  exact path="/stpro" component={StatePro}/>
          <Route  exact path="/compapi" component={Compapi}/>
          <Route  exact path="/lifycycle" component={Lifecycle}/>






          


          
      

    </Router>
      
    
  );
}

export default App;
