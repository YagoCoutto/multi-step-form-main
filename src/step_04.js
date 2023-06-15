import { userData } from "./step_01";

const step02 = document.querySelector('#step-02');
const step03 = document.querySelector('#step-03');
const step04 = document.querySelector('#step-04'); 
const step05 = document.querySelector('#step-05'); 
const span = document.querySelector('#span');
const spanValue = document.querySelector('#spanValue');
const bttNext = document.querySelectorAll('.btt-next')[3];
const bttBack = document.querySelectorAll('.btt-back')[2];
const addOns = document.querySelectorAll('.add-ons');


{

    bttNext.addEventListener("click", function () {
        step04.style.display = 'none';
        step05.style.display = 'flex';

        userData.addOns = arrPlan
        console.log(userData)
    });

    bttBack.addEventListener('click', function () {
        console.log(bttBack)
        step04.style.display = 'none';
        step03.style.display = 'flex';
    })

}