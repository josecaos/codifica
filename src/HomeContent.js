import React from 'react';
//
import $ from 'jquery';
//
import './HomeContent.css';
//

let heroTitle = "codifica"
let heroSubTitle = ".xyz"
let slogan = "Desarrollo en proyectos de Tecnología y Web"

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
