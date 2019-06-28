import React from 'react';
//
import $ from 'jquery';
import P5Wrapper from 'react-p5-wrapper';
//
import './HomeContent.css';
//

let heroTitle = "codifica"
let heroSubTitle = ".xyz"
let slogan = "Desarrollo Arte Tecnología Web"

export class HomeContent extends React.Component {
  render() {
    return (
      <section id="heroscreen" className="container-fluid">
      <div id="heroscreen-wrap" className="row">
      <div className="col-12 text-center ha my-auto">
      <h1 id="hero_title">{heroTitle}<small>{heroSubTitle}</small></h1>
      <h3 id="slogan">{slogan}</h3>
      </div>
      </div>
      <P5Wrapper sketch={sketch} />
      </section>
    )
  }
}
//
$(document).ready(function () {

  var t = 1000

  setTimeout(function (){

    var i = 0

    setInterval(function() {

      if (! i === 3) {
        i = 0
        t = t - i
      } else {
        i = i + 1
        texto_init()
        t = t - i
      }
    },t)
  },t)

});

function texto_init() {

  let titulo = $('#slogan').text()
  let a = titulo.split(" ")
  // console.log(a)

  shuffle(a)

  let b = a.join(" ")

  setTimeout(function() {
    $('#slogan').html(b)
  },250)
}

function shuffle(array) {
  let i = 0, j = 0, temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
// Fondo
export default function sketch(p) {
  let t = 0 //tiempo
  let width = 100
  let height =100


  p.setup = function() {
    p.createCanvas(1300, 600 /*,p.WEBGL*/);
    p.noStroke();
    p.fill(10, 250, 20);
  }

  p.draw = function() {

    p.background(10, 10); // fondo transparente (creates trails)
    //for (let x = 0; x <= width; x = x + 30) {
      //for (let y = 0; y <= height; y = y + 30) {
    //     // starting point of each circle depends on mouse position
    //    const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    //     const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
    //     // and also varies based on the particle's location
    //     const angle = xAngle * (x / width) + yAngle * (y / height);
    //
    //     // each particle moves in a circle
    //     const myX = x + 20 * cos(2 * PI * t + angle);
    //     const myY = y + 20 * sin(2 * PI * t + angle);
    //
    //     p.ellipse(myX, myY, 10); // dibuja la particula
    //   }
    // }

    t = t + 0.01; // update time

  }
  //     p.ellipse(myX, myY, 10); // dibuja la particula
}
