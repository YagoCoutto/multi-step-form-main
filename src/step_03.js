import {
    userData
} from "/src/step_01.js";


const addOns = document.querySelectorAll('.add-ons');
const bttNext = document.querySelectorAll('.btt-next')[2];
const bttBack = document.querySelectorAll('.btt-back')[1];
const step02 = document.querySelector('#step-02');
const step03 = document.querySelector('#step-03');
const step04 = document.querySelector('#step-04');
const span = document.querySelector('#span');
const spanValue = document.querySelector('#spanValue');
const p_descript = document.querySelectorAll('.p-descript');
const p_value = document.querySelectorAll('.p-value');
const content_subscription = document.querySelectorAll('.content-subscription');
const h3Tot = document.querySelectorAll('#h3Tot');


{
    const arrPlan = []
    let arrSumValur = 0
    addOns.forEach(item => {
        item.addEventListener('click', function () {
            if (item.children[0].checked === false) {
                item.children[0].checked = true;

                const addPlan = [item.children[1].children[0].textContent, item.children[2].textContent];
                //arrSumValur += item.children[2].textContent;
                console.log(arrSumValur)
                console.log(typeof (arrSumValur))

                //const addPlanValue = item.children[2].textContent;

                arrPlan.unshift(addPlan);
                console.log(item.children[2].textContent)

            } else {
                item.children[0].checked = false;

                const removePlan = arrPlan.indexOf(item.children[1].children[0].textContent);
                arrPlan.splice(removePlan, 1)
                console.log(arrPlan)

            }
        })
    })

    bttNext.addEventListener("click", function () {
        step03.style.display = 'none';
        step04.style.display = 'flex';

        userData.addOns = arrPlan

        /* 
         Arcade 9 / mo - 90 yr
         Advance 12 / mo - 120 yr
         Pro 15 / mo - 150 yr

         Online service         1 / mo - 10 / yr
         Larger storage         2 / mo - 20 / yr
         Customizable Profile   2 / mo - 120 / yr*/

        const mo = {
            arcade: 9,
            advance: 12,
            pro: 15,
            services: {
                online: 10,
                larger: 20,
                custom: 120,
            }
        }
        const yr = {
            arcade: 90,
            advance: 120,
            'Pro': 150,
            services: {
                'Online service': 10,
                larger: 20,
                custom: 120,
            }
        }

        console.log(yr['Pro'] + ' e ' + userData.plan)

        const istrue = function (span) {
            span.innerHTML = userData.typePlan;
            spanValue.innerHTML = userData.value;

            for (let key in userData.addOns) {
                p_descript[key].innerHTML = userData.addOns[key][0];
                p_value[key].innerHTML = userData.addOns[key][1];
            }
            if(userData.typePlan == 'Yearly' && userData.plan == 'Pro'){
                console.log('ok')
            }

        }

        istrue(span)


        console.log(userData)
    });

    bttBack.addEventListener('click', function () {
        console.log(bttBack)
        step03.style.display = 'none';
        step02.style.display = 'flex';
    })

}