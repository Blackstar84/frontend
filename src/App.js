import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

// instalar Router
// npm install --save react-router-dom@5 --save-exact 

function App() {
  return (
    <Router>
      <MainNavigation />
{/*       Metemos dentro de una estructura Switch para que cuando se ejecute alguna de las
      rutas, deje de ejecutarse las siguientes y no se ejecute el redirect */}
      <main>
      <Switch>
        {/* Ruta que verificara si es / y no tiene nada  */}
        <Route path="/" exact>
          {/* //Carga la página Users */}
          <Users />
        </Route>
        <Route path="/places/new">
          <NewPlace></NewPlace>
        </Route>

        {/* //Luego de Recorrer todos los Route si no encuentra una ruta que pongamos 
        // Redireccionará a un path específico */}
        <Redirect to="/" ></Redirect>
      </Switch>
      </main>
      

    </Router>
  );
}

export default App;
