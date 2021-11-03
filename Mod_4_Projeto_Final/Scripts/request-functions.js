import { adjustWords } from "./utility-functions.js"
import * as creationFunction from "./creation-functions.js"
import { cleanDynamicDiv } from "./listener-functions.js"

export async function getApartaments (selection) {    
    try {
        const result = adjustWords (selection)       
        const bruteData = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?state=${result.state}&city=${result.city}`)
        const data = await bruteData.json()
        const dynamicDiv = document.querySelector('.dynamicDiv')       
        dynamicDiv.innerHTML=''
        dynamicDiv.append(creationFunction.createProductDivInfo({total: data.search.totalCount, address: data.search.result.listings[0].listing.address}))
        data.search.result.listings.forEach(creationFunction.createProductDivView)
        cleanDynamicDiv()
    } catch (error) {
        console.log("Error in function getApartaments")
    }
}

