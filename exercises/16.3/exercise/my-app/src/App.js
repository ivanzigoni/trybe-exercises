import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import ClientesCadastrados from './Pages/ClientesCadastrados';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ (props) => <Home { ...props} />} />
        <Route exact path="/login" render={ (props) => <Login { ...props} />} />
        <Route exact path="/dashboard" render={ (props) => <ClientesCadastrados { ...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
