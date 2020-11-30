import React, { Component } from 'react';
import '../images/boton-registro.png';
import '../styles/registro.css';
import { Link } from 'react-router-dom';

class Registro extends Component{
    render() {
      return (
        <div className="App">
        <body class="body_registro">
          <div class="inicio_registro">
            <form class="form_registro">
              <p class="text" >Ingresa tu nombre completo</p>
              <input class="input_text" type="text" placeholder="Tu nombre aquí" />
              <p class="text">Ingresa tu Correo Electrónico</p>
              <input class="input_text" type="email" placeholder="Ejemplo: yourname0212@gmail.com" required/>
              <p class="text">Ingresa tu Contraseña</p>
              <input class="input_text" type="password" placeholder="Ejemplo: 4s@RT53.bDs$" required />
              <input class="enviar_registro" type="image" name="botondeenvio" src={require("../images/boton-registro.png")} alt="Enviar formulario"/>
            </form>
          </div>
          <img class="imagen_registro" src="https://www.educaciontrespuntocero.com/wp-content/uploads/2018/11/recursos-sobre-econom%C3%ADa-696x493.jpg" alt="dibujo bonito" />
          
          
        </body>
      </div>
        );
    }
  }
  
  export default Registro;