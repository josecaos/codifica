import React from 'react';
// import ReactDOM from 'react-dom';
import logo from './assets/img/codifica.logo.png';
import './Header.css';

const home_url = "localhost:3000"

export class Header extends React.Component {
  render() {
    return (
    <header className="App-header navbar navbar-expand-lg navbar-light">
    <button class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbar-mobile-trigger"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <a
      className="App-link navbar-brand"
      href={home_url}
      target="_blank"
      rel="noopener noreferrer"
      >
      <img src={logo}
      className="App-logo"
      alt="logo"
      />
    </a>
    <nav id="navbar-mobile-trigger" className="navbar-collapse collapse justify-content-between">
      <Menu />
    </nav>
  </header>
  );
}
}

class Menu extends React.Component {
  render() {
    return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a href="#">
          MenuItem
        </a>
      </li>
      <li className="nav-item">
        <a href="#">
          MenuItem
        </a>
      </li>
      <li className="nav-item">
        <a href="#">
          MenuItem
        </a>
      </li>
      <li className="nav-item">
        <a href="#">
          MenuItem
        </a>
      </li>
    </ul>
    );
  }
}
