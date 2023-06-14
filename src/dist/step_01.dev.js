"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userData = void 0;

/* --- step 1 --- */
var userData = {};
exports.userData = userData;
{
  var dataValidation = function dataValidation(nameUser, userEmail, userPhone, userData) {
    var borderRed = '1px solid red';
    var msgInvalid = 'inline-block';

    function validationName(nameUser, userData) {
      var nameValue = nameUser.value;

      if (nameValue.length <= 2 || nameValue.value == '') {
        nameUser.style.border = borderRed;
        spanInvalid[0].style.display = msgInvalid;
      } else {
        userData.name = nameValue;
      }

      ;
    }

    ;
    validationName(nameUser, userData);

    function validationEmail(userEmail, userData) {
      var emailValue = userEmail.value;
      var re = /\S+@\S+\.\S+/;
      var validationEmail = re.test(emailValue);

      if (validationEmail != true) {
        userEmail.style.border = borderRed;
        spanInvalid[1].style.display = msgInvalid;
      } else {
        userData.email = emailValue;
      }

      ;
    }

    ;
    validationEmail(userEmail, userData);

    function validationPhone(userPhone, userData) {
      var phoneValue = userPhone.value;

      if (parseInt(phoneValue.length) < 10 || parseInt(phoneValue.length) > 11) {
        userPhone.style.border = borderRed;
        spanInvalid[2].style.display = msgInvalid;
      } else {
        userData.tel = phoneValue;
      }

      ;
    }

    ;
    validationPhone(userPhone, userData);
  };

  var next = function next(userData) {
    bttNext.addEventListener("click", function () {
      dataValidation(nameUser, userEmail, userPhone, userData);
      var cont = 0; //verifica se o obj esta vazio

      for (var element in userData) {
        if (userData[element]) cont++;
      }

      if (cont === 3) {
        step01.style.display = 'none';
        step02.style.display = 'flex';
      }
    });
  };

  var back = function back() {
    bttBack.addEventListener('click', function () {
      step02.style.display = 'none';
      step01.style.display = 'flex';
    });
  };

  var nameUser = document.querySelector('#input-name');
  var userEmail = document.querySelector('#input-email');
  var userPhone = document.querySelector('#input-cel');
  var spanInvalid = document.querySelectorAll('span');
  var bttNext = document.querySelector('.btt-next');
  var bttBack = document.querySelector('#back');
  var step01 = document.querySelector('#step-01');
  var step02 = document.querySelector('#step-02');
  ;
  next(userData);
  back();
}
;