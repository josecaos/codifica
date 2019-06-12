import React from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/img/codifica.logo.png';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://josecaos.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <center><h1>Debug</h1></center>
        </a>
      </header>
    )
  }
}
