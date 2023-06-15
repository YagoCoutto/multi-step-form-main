import {
    userData
} from "/src/step_01.js";

{
    const plan = document.querySelectorAll('.plan');
    const btt_MonthOrYearl = document.querySelector('#switch-shadow');
    const month_free = document.querySelectorAll('.month-free');
    const colorMonthYear = document.querySelectorAll('.colorMonthYear');
    const disableValueP = document.querySelectorAll('.disable');
    const enableValueP = document.querySelectorAll('.enable');
    const bttNext = document.querySelector('#next');
    const bttBack = document.querySelector('#back');
    const step01 = document.querySelector('#step-01');
    const step02 = document.querySelector('#step-02');
    const step03 = document.querySelector('#step-03');
    const planYears = document.querySelectorAll('.planYear');


    //Selecionar um dos 3 planos
    const selectPlan = []
    const valuePlan = [];

    const istru = function (userData) {
        //plano anual
        userData.plan = valuePlan[0].children[1].textContent;
        //valor do plano
        userData.value = valuePlan[0].children[3].textContent;
        userData.typePlan = 'yearly';
    }

    const isfalse = function (userData) {
        //plano
        userData.plan = valuePlan[0].children[1].textContent;
        //valor do plano
        userData.value = valuePlan[0].children[2].textContent;
        userData.typePlan = 'monthly';
    }

    //altera a cor do plano selecionado
    plan.forEach(item => {
        item.addEventListener('click', event => {

            if (selectPlan.length <= 0) {
                item.style.border = '1px solid hsl(243, 100%, 62%)';
                item.style.backgroundColor = 'hsla(206, 100%, 92%, 0.558)';
                selectPlan.unshift(item);
                valuePlan.unshift(item);

            } else {
                selectPlan[0].style.border = '1px solid hsl(229, 24%, 87%)';
                selectPlan[0].style.backgroundColor = 'unset';
                selectPlan.unshift(item)
                selectPlan[0].style.border = '1px solid hsl(243, 100%, 62%)';
                selectPlan[0].style.backgroundColor = 'hsla(206, 100%, 92%, 0.558)';
                selectPlan.pop();
                valuePlan.unshift(item);
                valuePlan.pop();
            }
            isfalse(userData)
        });

    });

    //Botão mensal ou anual
    let yearly = true;
    btt_MonthOrYearl.addEventListener('click', function () {
        //Altera as cores 
        if (yearly === true) {
            colorMonthYear[0].style.color = 'hsl(231, 11%, 63%)';
            colorMonthYear[1].style.color = 'hsl(213, 96%, 18%)';

            //adiciona as inf de free
            for (let i = 0; i < month_free.length; i++) {
                month_free[i].style.display = 'flex';
                enableValueP[i].style.display = 'flex';
                disableValueP[i].style.display = 'none';
            };
            yearly = false;
            istru(userData);

        } else if (yearly === false) {
            colorMonthYear[1].style.color = 'hsl(231, 11%, 63%)';
            colorMonthYear[0].style.color = 'hsl(213, 96%, 18%)';

            //adiciona as inf de free
            for (let i = 0; i < month_free.length; i++) {
                month_free[i].style.display = 'none';
                enableValueP[i].style.display = 'none';
                disableValueP[i].style.display = 'flex';
            };
            yearly = true;
            isfalse(userData);
        };

        const istrue = function () {
            planYears[0].innerHTML = '+$10/yr'
            planYears[1].innerHTML = '+$20/yr'
            planYears[2].innerHTML = '+$120/yr'
            console.log(planYears[2].textContent)
        }
        if (userData.typePlan == 'yearly') {
            istrue()
        }

    });

    function buttons(userData) {
        bttNext.addEventListener("click", function () {

            let cont = 0; //verifica se o obj esta vazio
            for (let element in userData) {
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
        })

    };
    buttons(userData);


};
