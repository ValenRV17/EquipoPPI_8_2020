import React, { Component } from 'react';
import '../images/boton-inicio.png';
import '../styles/sesion.css';
import { Link } from 'react-router-dom';

class Sesion extends Component{
    render() {
      return (
        <div>
        <body className="sesion_body">
          <div class="inicio_sesion">
            <form class="sesion_form">
              <p class="text">Correo Electrónico</p>
              <input class="inp_text" type="email" placeholder="Ejemplo: yourname0212@gmail.com" required/>
              <p class="text">Contraseña</p>
              <input class="inp_text" type="password" placeholder="Ejemplo: 4s@RT53.bDs$" required />
              <Link to="/inicio"><input class="enviar_sesion" type="image" name="botondeenvio" src={require('../images/boton-inicio.png')} alt="Enviar formulario"/></Link>
            </form>
            <div class="opciones">
              <p class="registro">¿Ya tienes una cuenta? <Link to="/registro">Registrate</Link></p>
              <p class="olvido">¿has olvidado sesión?<a href="#">Haz click aquí</a></p>
            </div>
          </div>
          <img class="imagen_sesion" src="https://www.educaciontrespuntocero.com/wp-content/uploads/2018/11/recursos-sobre-econom%C3%ADa-696x493.jpg" alt="imagen_sesion" />
          
          
        </body>
      </div>
        );
    }
  }
  
  export default Sesion;