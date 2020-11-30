import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Inicio from './pages/inicio';
import Ingresos from './pages/ingresos.js';
import Header from './pages/header';
import Consejos from './pages/consejos';
import Personas from './pages/personas';
import Gastos from './pages/gastos';
import Fast from './pages/fast';
import Ingresos2 from './pages/ingresos2.js';
import Gastos2 from './pages/gastos2.js';
import Personas2 from './pages/personas2.js';
import Fast2 from './pages/fast2.js';
import Sesion from './pages/inicio_sesion.js';
import Registro from './pages/registro.js';
import Confi from './pages/confi.js';
import Progreso from './pages/progreso.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Redirect
            from="/"
            to="/inicio" />
          <Switch>
            <Route
              path="/inicio_sesion"
              render={() => <Sesion/>}/>
            <Route
              path="/registro"
              render={() => <Registro/>}/>
            <div>
              <Header/>
              <Confi/>
              <Route
                exact
                path="/inicio"
                render={() => <Inicio name="Inicio"/>}/>
              <Route
                exact
                path="/consejos"
                render={() => <Consejos name="Consejos" />} />
              <Route
                exact
                path="/ingresos"
                render={() => <Ingresos name="Ingresos" />} />
              <Route
                exact
                path="/personas"
                render={() => <Personas name="Personas" />} />
              <Route
                exact
                path="/Gastos"
                render={() => <Gastos name="Gastos" />} />
              <Route
                exact
                path="/ingresos/añadir"
                render={() => <Ingresos2 name="Añadir_Ingreso" />} />
              <Route
                exact
                path="/gastosSinPlanificar/añadir"
                render={() => <Fast2 name="Añadir_Gastos_sin_planificar" />} />
              <Route
                exact
                path="/personas/añadir"
                render={() => <Personas2 name="Añadir_Persona" />} />
              <Route
                exact
                path="/gastos/añadir"
                render={() => <Gastos2 name="Añadir_Gasto" />} />
              <Route
                exact
                path="/gastosSinPlanificar"
                render={() => <Fast name="Gastos_sin_planificar" />} />
              <Route
                exact
                path="/progreso"
                render={() => <Progreso name="Progreso" />} />
            </div>
          </Switch>
              </div>
      </Router>
    );
  }
}

export default App;