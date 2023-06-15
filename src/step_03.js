import {
    userData
} from "/src/step_01.js";


const addOns = document.querySelectorAll('.add-ons');
const bttNext = document.querySelector('#next');
const bttBack = document.querySelector('#back');
const step02 = document.querySelector('#step-02');
const step03 = document.querySelector('#step-03');
const step04 = document.querySelector('#step-04');


{
    addOns.forEach(item => {
        item.addEventListener('click', function () {
            if (item.children[0].checked === false) {
                item.children[0].checked = true;
            } else {
                item.children[0].checked = false;
            }
            console.log(item.children[0].checked)
        })
    })

  /*  bttNext.addEventListener("click", function () {
        step03.style.display = 'none';
        step04.style.display = 'flex';

    });*/
    console.log(bttBack)

    bttBack.addEventListener('click', function () {
        step03.style.display = 'none';
        step02.style.display = 'flex';
    })




}