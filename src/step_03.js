import {
    userData
} from "/src/step_01.js";

const addOns = document.querySelectorAll('.add-ons');
const planYears = document.querySelectorAll('.planYear');

{
    /*
        Pensar em uma maneira de verificar a propriedade typePlan depois que ela for efetuada
    */

    //console.log(userData.typePlan)
    const istrue = function () {
        planYears[0].innerHTML = '+$10/yr'
        planYears[1].innerHTML = '+$20/yr'
        planYears[2].innerHTML = '+$120/yr'
        console.log(planYears[2].textContent)
    }
    if (userData.typePlan == 'yearly') {
        istrue()
    }



    addOns.forEach(item => {
        item.addEventListener('click', function () {

            item.children[0].checked = true;
            console.log(item.children[0])
        })
    })

}