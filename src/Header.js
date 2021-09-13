import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './assets/img/codifica.logo.dark.png';
import './Header.css';

const home_url = "localhost:3000"

export class Header extends Component {

  render() {//metodo
    return (
    <header className="App-header navbar navbar-expand-lg navbar-dark">
      <div className="contenedor">
      {/* <button className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-mobile-trigger"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <a
    className="App-link navbar-brand"
    href={home_url}
    rel="noopener noreferrer"
    >
      <div>
    <img src={logo}
    className="App-logo"
    alt="logo"
    />
    </div>
  </a>
  {/* <nav id="navbar-mobile-trigger" className="navbar-collapse collapse justify-content-between">
    <Menu />
  </nav> */}
  </div>
</header>
);
}
}

class Menu extends Component {
  render() {
    return (
      <Router>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/">Inicio</Link>
      </li>
      <li className="nav-item">
        <Link to="/contacto/">Contacto</Link>
      </li>
    </ul>
    <Route path="/contacto/" exact component={Contacto} />
        </Router>
    );
  }
}

function Contacto() {
    return <h2>Contacto</h2>
}
