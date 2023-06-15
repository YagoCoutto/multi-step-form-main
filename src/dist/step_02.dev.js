"use strict";

var _step_ = require("/src/step_01.js");

{
  var buttons = function buttons(userData) {
    bttNext.addEventListener("click", function () {
      var cont = 0; //verifica se o obj esta vazio

      for (var element in userData) {
        if (userData[element]) cont++;
      }

      if (cont === 6) {
        step02.style.display = 'none';
        step03.style.display = 'flex';
      }
    });
    bttBack.addEventListener('click', function () {
      step02.style.display = 'none';
      step01.style.display = 'flex';
    });
  };

  var plan = document.querySelectorAll('.plan');
  var btt_MonthOrYearl = document.querySelector('#switch-shadow');
  var month_free = document.querySelectorAll('.month-free');
  var colorMonthYear = document.querySelectorAll('.colorMonthYear');
  var disableValueP = document.querySelectorAll('.disable');
  var enableValueP = document.querySelectorAll('.enable');
  var bttNext = document.querySelectorAll('.btt-next')[1];
  var bttBack = document.querySelectorAll('.btt-back')[0];
  var step01 = document.querySelector('#step-01');
  var step02 = document.querySelector('#step-02');
  var step03 = document.querySelector('#step-03');
  var planYears = document.querySelectorAll('.planYear'); //Selecionar um dos 3 planos

  var selectPlan = [];
  var valuePlan = [];

  var istru = function istru(userData) {
    //plano anual
    userData.plan = valuePlan[0].children[1].textContent; //valor do plano

    userData.value = valuePlan[0].children[3].textContent;
    userData.typePlan = 'Yearly';
  };

  var isfalse = function isfalse(userData) {
    //plano
    userData.plan = valuePlan[0].children[1].textContent; //valor do plano

    userData.value = valuePlan[0].children[2].textContent;
    userData.typePlan = 'Monthly';
  }; //altera a cor do plano selecionado


  plan.forEach(function (item) {
    item.addEventListener('click', function (event) {
      if (selectPlan.length <= 0) {
        item.style.border = '1px solid hsl(243, 100%, 62%)';
        item.style.backgroundColor = 'hsla(206, 100%, 92%, 0.558)';
        selectPlan.unshift(item);
        valuePlan.unshift(item);
      } else {
        selectPlan[0].style.border = '1px solid hsl(229, 24%, 87%)';
        selectPlan[0].style.backgroundColor = 'unset';
        selectPlan.unshift(item);
        selectPlan[0].style.border = '1px solid hsl(243, 100%, 62%)';
        selectPlan[0].style.backgroundColor = 'hsla(206, 100%, 92%, 0.558)';
        selectPlan.pop();
        valuePlan.unshift(item);
        valuePlan.pop();
      }

      isfalse(_step_.userData);
    });
  }); //Botão mensal ou anual

  var yearly = true;
  btt_MonthOrYearl.addEventListener('click', function () {
    //Altera as cores 
    if (yearly === true) {
      colorMonthYear[0].style.color = 'hsl(231, 11%, 63%)';
      colorMonthYear[1].style.color = 'hsl(213, 96%, 18%)'; //adiciona as inf de free

      for (var i = 0; i < month_free.length; i++) {
        month_free[i].style.display = 'flex';
        enableValueP[i].style.display = 'flex';
        disableValueP[i].style.display = 'none';
      }

      ;
      yearly = false;
      istru(_step_.userData);
    } else if (yearly === false) {
      colorMonthYear[1].style.color = 'hsl(231, 11%, 63%)';
      colorMonthYear[0].style.color = 'hsl(213, 96%, 18%)'; //adiciona as inf de free

      for (var _i = 0; _i < month_free.length; _i++) {
        month_free[_i].style.display = 'none';
        enableValueP[_i].style.display = 'none';
        disableValueP[_i].style.display = 'flex';
      }

      ;
      yearly = true;
      isfalse(_step_.userData);
    }

    ;

    var istrue = function istrue() {
      planYears[0].innerHTML = '+$10/yr';
      planYears[1].innerHTML = '+$20/yr';
      planYears[2].innerHTML = '+$120/yr';
      console.log(planYears[2].textContent);
    };

    if (_step_.userData.typePlan == 'Yearly') {
      istrue();
    }
  });
  ;
  buttons(_step_.userData);
}
;