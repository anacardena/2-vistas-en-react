import logo from './utils/images/logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Ayuda from "./components/Casas_de_ayuda.jsx"
import Nosotras from "./components/Somos.jsx"
function App() {
  return (
    <div className="App">
    <Router> 
    <Switch>
    <Route path="/Nosotras" exact component={Nosotras} />
     <Route path="/Ayuda" exact component={Ayuda} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;


