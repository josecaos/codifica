import React, {Component } from 'react';
import {Header } from './Header';
import {Footer } from './Footer';
import {HomeContent } from './HomeContent';
import {Twitter, HashtagFind } from './Twitter';
import './App.css';

export class App extends Component {
  render() {
    return (
      <section id="App">
      <Header />

      <HomeContent />
      {/* <HashtagFind tag="Mexico" />
      <Twitter /> */}

      <Footer />
      </section>
    )
  }
}

export default App;
