/* --- step 1 --- */

const userData = {};

{
    const nameUser = document.querySelector('#input-name');
    const userEmail = document.querySelector('#input-email');
    const userPhone = document.querySelector('#input-cel');
    const spanInvalid = document.querySelectorAll('span');
    const bttNext = document.querySelectorAll('.btt-next')[0];
    const step01 = document.querySelector('#step-01');
    const step02 = document.querySelector('#step-02');

    function dataValidation(nameUser, userEmail, userPhone, userData) {
        const borderRed = '1px solid red';
        const msgInvalid = 'inline-block';

        function validationName(nameUser, userData) {
            const nameValue = nameUser.value;

            if (nameValue.length <= 2 || nameValue.value == '') {
                nameUser.style.border = borderRed;
                spanInvalid[0].style.display = msgInvalid;
            } else {
                userData.name = nameValue;
            };
        };
        validationName(nameUser, userData);

        function validationEmail(userEmail, userData) {
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
        validationEmail(userEmail, userData);

        function validationPhone(userPhone, userData) {
            const phoneValue = userPhone.value;

            if (parseInt(phoneValue.length) < 10 || parseInt(phoneValue.length) > 11) {
                userPhone.style.border = borderRed;
                spanInvalid[2].style.display = msgInvalid;
            } else {
                userData.tel = phoneValue
            };
        };
        validationPhone(userPhone, userData);       
    };

    function next(userData) {
        bttNext.addEventListener("click", function () {
            dataValidation(nameUser, userEmail, userPhone, userData)

            let cont = 0; //verifica se o obj esta vazio
            for (let element in userData) {
                if (userData[element]) cont++;
            }
            if (cont > 2) {
                step01.style.display = 'none';
                step02.style.display = 'flex';
            }
        });
    }
    next(userData)

};

export {
    userData
};