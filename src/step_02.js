import {
    stepOne
} from "/src/step_01.js";


(function () {
    const userData = stepOne.userData;

    const plan = document.querySelectorAll('.plan');
    const btt_MonthOrYearl = document.querySelector('#switch-shadow');
    const month_free = document.querySelectorAll('.month-free');
    const colorMonthYear = document.querySelectorAll('.colorMonthYear');
    const disableValueP = document.querySelectorAll('.disable');
    const enableValueP = document.querySelectorAll('.enable');

    plan.forEach(item => {
        let ena = true;
        item.addEventListener('click', event => {
            //event = false
            console.log()
            if(ena === true){
                ena = false
                item.style.border = '1px solid hsl(243, 100%, 62%)';
            }else{
                ena = true
                item.style.border = '1px solid red';
            }
        })
    })

    let enable = true;
    btt_MonthOrYearl.addEventListener('click', function () {
        console.log(userData)

        if (enable === true) {
            enable = false;
            colorMonthYear[0].style.color = 'hsl(231, 11%, 63%)';
            colorMonthYear[1].style.color = 'hsl(213, 96%, 18%)';

            for (let i = 0; i < month_free.length; i++) {
                month_free[i].style.display = 'flex';
                enableValueP[i].style.display = 'flex';
                disableValueP[i].style.display = 'none';
            };

        } else {
            enable = true;
            colorMonthYear[1].style.color = 'hsl(231, 11%, 63%)';
            colorMonthYear[0].style.color = 'hsl(213, 96%, 18%)';

            for (let i = 0; i < month_free.length; i++) {
                month_free[i].style.display = 'none';
                enableValueP[i].style.display = 'none';
                disableValueP[i].style.display = 'flex';
            };

        };
    })

}());