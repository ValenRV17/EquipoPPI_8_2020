import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../header.css';
import '../images/loguito2.png'

class Header extends Component{
    render() {
      return (
      <header>
        <div class="wrapper">
        <div class="logo">
            <img class='image_logo' src={require('../images/loguito2.png')}/>
        </div>
        <nav class="header_menu">
           <Link to="/inicio" class="header"><b>INICIO</b></Link>
           <Link to="/progreso" class="header" href="#"><b>PROGRESO</b></Link>
           <Link to="/Consejos" class="header"><b>CONSEJOS</b></Link>
        </nav>
        </div>
      </header>
     );
  }
 }
export default Header;