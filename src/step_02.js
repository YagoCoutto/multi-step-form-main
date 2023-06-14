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
    const bttNext = document.querySelector('#next');
    const bttBack = document.querySelector('#back');
    const step01 = document.querySelector('#step-01');
    const step02 = document.querySelector('#step-02');
    const step03 = document.querySelector('#step-03');


    //Selecionar um dos 3 planos
    const selectPlan = []
    const valuePlan = [];

    function selectionPlan(yearly) {
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

                function planInformation() {
                    //plano
                    userData.plan = valuePlan[0].children[1].textContent;
                    //valor do plano
                    userData.value = valuePlan[0].children[2].textContent;
                    console.log(valuePlan[0].children[2].textContent)


                    //verifica se valor é anual
                    function yearlyTrue () {
                        
                        if (yearly === true) {
                            //plano
                            userData.plan = valuePlan[0].children[1].textContent;
                            //valor do plano
                            userData.value = valuePlan[0].children[3].textContent;
                            console.log(valuePlan[0].children[3].textContent)
                            console.log('chamou')
                        };
                    }
                    return yearlyTrue;
        
                };
                planInformation()
                return planInformation
            });

        });

    };
    selectionPlan(yearly);

    //Botão mensal ou anual
    function monthlyOrYearly(planInformation) {
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
                console.log(planInformation())
                yearly = false;

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

            };
            return yearly
        });

    };
    monthlyOrYearly(selectionPlan);

    function bttBackNext() {

        bttNext.addEventListener("click", function () {
            let cont = 0; //verifica se o obj esta vazio
            for (let element in userData) {
                if (userData[element]) cont++;
            }
            if (cont === 5) {
                step02.style.display = 'none';
                step03.style.display = 'flex';
            }
            console.log(userData)

        });

        bttBack.addEventListener('click', function () {
            step02.style.display = 'none';
            step01.style.display = 'flex';
            console.log('tst')
        })
    };
    bttBackNext();

}());