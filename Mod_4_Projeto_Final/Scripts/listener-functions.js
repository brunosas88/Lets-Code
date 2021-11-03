import { getApartaments } from "./request-functions.js"
import { cleanMenuDiv } from "./utility-functions.js"

export function selectCity () {    
    const inputChoice = document.querySelector('#cityChoice')
    inputChoice.addEventListener('change', (e) => {
        const selection = e.target.value
        e.target.value = ''
        getApartaments(selection)
        cleanMenuDiv()       
    })
}

export function cleanDynamicDiv () {
    const dynamicDiv = document.querySelector('.dynamicDiv')
    const divAddressChoicePO = document.querySelector('#addressChoicePO')
    divAddressChoicePO.addEventListener('click', (e) => {
        dynamicDiv.innerHTML=''
        divAddressChoicePO.parentNode.removeChild(divAddressChoicePO)
    }) 
    const pInfoAddress = document.querySelector('#pInfoAddressPW')
    pInfoAddress.addEventListener('click', (e) => {
        dynamicDiv.innerHTML=''
        divAddressChoicePO.parentNode.removeChild(divAddressChoicePO)
    })  
}