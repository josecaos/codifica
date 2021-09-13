import React from 'react';
//
import './Footer.css';

const copyright = "Copyright | " + new Date().getFullYear();

export class Footer extends React.Component {
  render() {
    return (
    <footer className="container-fluid">
        <div id="copyright">
          <p className="col-12 no-margin">
            {copyright}
          </p>
        </div>
    </footer>
    )
  }
}
