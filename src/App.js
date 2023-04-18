import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Users from './user/pages/Users';

// instalar Router
// npm install --save react-router-dom@5 --save-exact 

function App() {
  return (
    <Router>
      //Ruta que verificara si es / y no tiene nada 
      <Route path="/" exact>
        //Carga la página Users
        <Users />
      </Route>

      //Luego de Recorrer todos los Route si no encuentra una ruta que pongamos 
      // Redireccionará a un path específico
      <Redirect to="/" ></Redirect>

    </Router>
  );
}

export default App;
