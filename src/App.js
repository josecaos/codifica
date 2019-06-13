import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {HomeContent} from './HomeContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <HomeContent />

      <Footer />
    </div>
  );
}

export default App;
