"use strict";

var _step_ = require("/src/step_01.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var addOns = document.querySelectorAll('.add-ons');
var bttNext = document.querySelectorAll('.btt-next')[2];
var bttBack = document.querySelectorAll('.btt-back')[1];
var step02 = document.querySelector('#step-02');
var step03 = document.querySelector('#step-03');
var step04 = document.querySelector('#step-04');
var span = document.querySelector('#span');
var spanValue = document.querySelector('#spanValue');
var p_descript = document.querySelectorAll('.p-descript');
var p_value = document.querySelectorAll('.p-value');
var content_subscription = document.querySelectorAll('.content-subscription');
var h3Tot = document.querySelectorAll('#h3Tot');
{
  var arrPlan = [];
  var arrSumValur = 0;
  addOns.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.children[0].checked === false) {
        item.children[0].checked = true;
        var addPlan = [item.children[1].children[0].textContent, item.children[2].textContent]; //arrSumValur += item.children[2].textContent;

        console.log(arrSumValur);
        console.log(_typeof(arrSumValur)); //const addPlanValue = item.children[2].textContent;

        arrPlan.unshift(addPlan);
        console.log(item.children[2].textContent);
      } else {
        item.children[0].checked = false;
        var removePlan = arrPlan.indexOf(item.children[1].children[0].textContent);
        arrPlan.splice(removePlan, 1);
        console.log(arrPlan);
      }
    });
  });
  bttNext.addEventListener("click", function () {
    step03.style.display = 'none';
    step04.style.display = 'flex';
    _step_.userData.addOns = arrPlan;
    /* 
     Arcade 9 / mo - 90 yr
     Advance 12 / mo - 120 yr
     Pro 15 / mo - 150 yr
       Online service         1 / mo - 10 / yr
     Larger storage         2 / mo - 20 / yr
     Customizable Profile   2 / mo - 120 / yr*/

    var mo = {
      arcade: 9,
      advance: 12,
      pro: 15,
      services: {
        online: 10,
        larger: 20,
        custom: 120
      }
    };
    var yr = {
      arcade: 90,
      advance: 120,
      'Pro': 150,
      services: {
        'Online service': 10,
        larger: 20,
        custom: 120
      }
    };
    console.log(yr['Pro'] + ' e ' + _step_.userData.plan);

    var istrue = function istrue(span) {
      span.innerHTML = _step_.userData.typePlan;
      spanValue.innerHTML = _step_.userData.value;

      for (var key in _step_.userData.addOns) {
        p_descript[key].innerHTML = _step_.userData.addOns[key][0];
        p_value[key].innerHTML = _step_.userData.addOns[key][1];
      }

      if (_step_.userData.typePlan == 'Yearly' && _step_.userData.plan == 'Pro') {
        console.log('ok');
      }
    };

    istrue(span);
    console.log(_step_.userData);
  });
  bttBack.addEventListener('click', function () {
    console.log(bttBack);
    step03.style.display = 'none';
    step02.style.display = 'flex';
  });
}