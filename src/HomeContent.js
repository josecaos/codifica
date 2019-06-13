import React from 'react';
//
import './HomeContent.css';

let heroTitle = "CODIFICA"

export class HomeContent extends React.Component {
  render() {
    return (
    <section id="heroscreen" className="container-fluid">
      <div id="heroscreen-wrap" className="row">
        <div className="col-12 text-center ha my-auto">
          <h1>{heroTitle}<small>.xyz</small></h1>
        </div>
      </div>
    </section>
    )
  }
}
