"use strict";

const mainElem   = document.getElementsByClassName("main"),
      leftElem   = document.getElementsByClassName('left'),
      centerElem = document.getElementsByClassName('center'),
      rightElem  = document.getElementsByClassName('right'),
      dateElem   = document.getElementsByClassName('date-time'),
      decibelElem = document.getElementsByClassName('decibels'), heartElem = document.getElementsByClassName('heartbeat'),
      quoteElem = document.getElementsByClassName('quotes'),
      logoElem  = document.getElementById('logo');
      

function getValue() {
    return Math.floor(Math.random() * 100);
}


let date = new Date();

let val = date.toDateString();

console.log(val);


dateElem.append = val;





