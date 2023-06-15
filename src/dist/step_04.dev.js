"use strict";

var _step_ = require("./step_01");

var step02 = document.querySelector('#step-02');
var step03 = document.querySelector('#step-03');
var step04 = document.querySelector('#step-04');
var step05 = document.querySelector('#step-05');
var span = document.querySelector('#span');
var spanValue = document.querySelector('#spanValue');
var bttNext = document.querySelectorAll('.btt-next')[3];
var bttBack = document.querySelectorAll('.btt-back')[2];
var addOns = document.querySelectorAll('.add-ons');
{
  bttNext.addEventListener("click", function () {
    step04.style.display = 'none';
    step05.style.display = 'flex';
    _step_.userData.addOns = arrPlan;
    console.log(_step_.userData);
  });
  bttBack.addEventListener('click', function () {
    console.log(bttBack);
    step04.style.display = 'none';
    step03.style.display = 'flex';
  });
}