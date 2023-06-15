"use strict";

var _step_ = require("/src/step_01.js");

var addOns = document.querySelectorAll('.add-ons');
var bttNext = document.querySelector('#next');
var bttBack = document.querySelector('#back');
var step02 = document.querySelector('#step-02');
var step03 = document.querySelector('#step-03');
var step04 = document.querySelector('#step-04');
{
  addOns.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.children[0].checked === false) {
        item.children[0].checked = true;
      } else {
        item.children[0].checked = false;
      }

      console.log(item.children[0].checked);
    });
  });
  /*  bttNext.addEventListener("click", function () {
        step03.style.display = 'none';
        step04.style.display = 'flex';
      });*/

  console.log(bttBack);
  bttBack.addEventListener('click', function () {
    step03.style.display = 'none';
    step02.style.display = 'flex';
  });
}