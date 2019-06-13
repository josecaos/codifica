import React from 'react';
//
import './Footer.css';

const copyright = "Copyright | 2019"

export class Footer extends React.Component {
  render() {
    return (
    <footer className="container-fluid">

      <div className="row">
        <div id="copyright" className="col-12 col-md-6 ha my-auto">
          <p class="col-12 text-left no-margin">
            {copyright}
          </p>
        </div>
        <div id="footer-bottom" className="col-12 col-md-6">

        </div>
      </div>
    </footer>
    )
  }
}
