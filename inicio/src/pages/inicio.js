import React, { Component } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import '../images/Image_Ingre.jpg';
import '../images/icono-menu.png'
import '../images/image_gast.jpg';
import '../images/image_pers.jpg';
import '../images/amorx.jpg';
import '../images/Valentina.jpg';
import '../header.css';
import '../images/Felipe.png';


class Inicio extends Component {
  render() {
    return (

    <body>
      
      <div class="bienvenido">
        <h1>BIENVENIDO</h1>
        <p>Esta aplicación está especialmente hecha para aquellas personas que quieren mejorar su manera de manejar su dinero.<br></br> Aquí encontrarás consejos personalizados, herramientas y gráficas que te ayudarán en tu progreso.<br></br>Te hará darte cuenta de las cosas en las que fallas realmente para solucionar tu problema desde la raiz.<br></br>Dale click a una de las siguientes imagenes para obtener más información. </p>
      </div>
      <div class="cards">
       <div class="card_ingre">
       <Link to="/ingresos" className="link"><img class='image_ing' src={require('../images/Image_Ingre.jpg')} alt="Ingresos-imagen"></img></Link>
         <div class="container">
            <h2><b>Ingresos</b></h2>
         </div>
       </div>
       <div class="card_gast">
          <Link to="/gastos" className="link"><img class='image_gast' src={require('../images/image_gast.jpg')} alt="gastos-imagen"></img></Link>
         <div class="container2">
           <h2><b>Gastos</b></h2>
          </div>
        </div>
      </div>
      <div class="card_pers">
          <Link to="/personas" className="link"><img class='image_pers' src={require('../images/image_pers.jpg')} alt="personas-imagen"></img></Link>
         <div class="container3">
            <h2><b>Personas</b></h2>
         </div>
       </div>
       <div class="card_fast">
          <Link to="/gastosSinPlanificar" className="link"><img class='image_fast' src={require('../images/image_fast.jpg')} alt="no-plan-gastos-imagen"></img></Link>
         <div class="container4">
           <h2><b>Gastos Sin Planificar</b></h2>
          </div>
        </div>
      <div class="nosotros" id="sobre_nosotros">
        <h1>Sobre Nosotros</h1>
        <p>Somos un pequeño grupo de estudiantes de Desarrollo de Software Web que desean resolver un problema mediante esta aplicación.</p>
      </div>
    <div class="contactanos" id="contactano">
      <h1>Contactanos</h1>
    </div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img class="images" src={require('../images/amorx.jpg')} alt=""></img>
        </div>
        <div class="flip-card-back">
          <h1>Santiago Arismendy</h1>
          <p>Programador e Investigador</p>
          <p>santiago.arismendyz@iefedericoozanam.edu.co</p>
        </div>
      </div>
    </div>
    <div class="flip-card2">
      <div class="flip-card-inner2">
        <div class="flip-card-front2">
          <img class="images" src={require('../images/Valentina.jpg')} alt=""></img>
        </div>
        <div class="flip-card-back2">
          <h1>Valentina Ramirez</h1>
          <p>Programadora y Diseñadora</p>
          <p>valentina.ramirez@iefedericoozanam.edu.co</p>
          
        </div>
      </div>
    </div>
    
    <footer>
      <p>Todos los derechos reservados</p>
    </footer>
    </body>
  );
  }
  }
  


export default Inicio;
