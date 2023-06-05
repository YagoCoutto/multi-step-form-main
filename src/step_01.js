/* --- step 1 --- */

let stepOne = {};

stepOne.moduleOne = (function () {
    const nameUser = document.querySelector('#input-name');
    const userEmail = document.querySelector('#input-email');
    const userPhone = document.querySelector('#input-cel');
    const spanInvalid = document.querySelectorAll('span');
    const bttNext = document.querySelector('.btt-next');
    const step01 = document.querySelector('#step-01');
    const step02 = document.querySelector('#step-02');

    
    'use strict';
    const userData = {};

    function dataValidation(name, email, phone) {
        const borderRed = '1px solid red';
        const msgInvalid = 'inline-block';

        function validationName(name) {
            nameValue = name.value;

            if (nameValue.length <= 2 || nameValue.value == '') {
                name.style.border = borderRed;
                spanInvalid[0].style.display = msgInvalid;
                console.log('invalido')
            } else {
                userData.name = nameValue;
            };
        };

        function validationEmail(email) {
            emailValue = email.value;
            const re = /\S+@\S+\.\S+/;
            const validationEmail = re.test(emailValue);

            if (validationEmail != true) {
                email.style.border = borderRed;
                spanInvalid[1].style.display = msgInvalid;
            } else {
                userData.email = emailValue
            };
        };

        function validationPhone(phone) {
            phoneValue = phone.value;
            
            if (parseInt(phoneValue.length) < 10 || parseInt(phoneValue.length) > 11) {
                phone.style.border = borderRed;
                spanInvalid[2].style.display = msgInvalid;
            } else {
                userData.tel = phoneValue
            };
        };

        bttNext.addEventListener("click", function () {
            validationName(name);
            validationEmail(email);
            validationPhone(phone);
            
            let cont = 0;
            for (element in userData){
                if (userData[element]) cont++;
            }
            if (cont === 3){
                step01.style.display = 'none';
                step02.style.display = 'flex';
            }
            console.log(userData)
        });

    };
    dataValidation(nameUser, userEmail, userPhone)
    return userData
}());
//console.log(stepOne.moduleOne)