import React, { Component } from 'react';
import '../styles/personas2.css';
import '../header.css';
import '../images/agregar-button.png';


class Personas2 extends Component {
  render() {
    return (
  <div className="App">
    <body>
      
        <div class="intro_personas">
             <h1>PERSONAS</h1>
        </div>
        <form>
         <p class="text_personas">Nombre</p>
         <input class="input_text_personas" type="text" placeholder="Ingresa el nombre de la persona " />
         <p class="text_personas">¿Qué parentesco tienes con esta persona?</p>
         <select class="lista" id="parentesco" name="parentesco">
           <option value="madre">Madre</option>
           <option value="padre">Padre</option>
           <option value="abuelo/a">Abuelo/a</option>
           <option value="hermano/a">Hermano/a</option>
           <option value="tio/a">Tío/a</option>
           <option value="primo/a">Primo/a</option>
           <option value="novio/a">Novio/a</option>
           <option value="conyuge">Conyuge</option>
           <option value="otro">Otro</option>
          </select>
          <button class="button" type="submit">Añadir</button>
        </form>

        </body>   
  
    </div>
  );
}
}

export default Personas2;