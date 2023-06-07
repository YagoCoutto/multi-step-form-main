/* --- step 1 --- */

let stepOne = {};

(function () {
    const nameUser = document.querySelector('#input-name');
    const userEmail = document.querySelector('#input-email');
    const userPhone = document.querySelector('#input-cel');
    const spanInvalid = document.querySelectorAll('span');
    const bttNext = document.querySelector('.btt-next');
    const step01 = document.querySelector('#step-01');
    const step02 = document.querySelector('#step-02');

    
    'use strict';
    const userData = {
        name,
    };

    function dataValidation(nameUser, userEmail, userPhone) {
        const borderRed = '1px solid red';
        const msgInvalid = 'inline-block';

        function validationName(nameUser) {

            const nameValue = nameUser.value;

            if (nameValue.length <= 2 || nameValue.value == '') {
                nameUser.style.border = borderRed;
                spanInvalid[0].style.display = msgInvalid;
                console.log('invalido')
            } else {
                userData.name = nameValue;
            };
        };

        function validationEmail(userEmail) {
            const emailValue = userEmail.value;
            const re = /\S+@\S+\.\S+/;
            const validationEmail = re.test(emailValue);

            if (validationEmail != true) {
                userEmail.style.border = borderRed;
                spanInvalid[1].style.display = msgInvalid;
            } else {
                userData.email = emailValue
            };
        };

        function validationPhone(userPhone) {
            const phoneValue = userPhone.value;
            
            if (parseInt(phoneValue.length) < 10 || parseInt(phoneValue.length) > 11) {
                userPhone.style.border = borderRed;
                spanInvalid[2].style.display = msgInvalid;
            } else {
                userData.tel = phoneValue
            };
        };

        bttNext.addEventListener("click", function () {
            validationName(nameUser);
            validationEmail(userEmail);
            validationPhone(userPhone);
            
            let cont = 0;//verifica se o obj esta vazio
            for (let element in userData){
                if (userData[element]) cont++;
            }
            if (cont === 3){
                step01.style.display = 'none';
                step02.style.display = 'flex';
            }
        });
      
    };

    dataValidation(nameUser, userEmail, userPhone)
    stepOne.userData = userData;
}());

export {stepOne};





