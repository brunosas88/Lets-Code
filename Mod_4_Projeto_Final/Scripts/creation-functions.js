import { translate } from "./utility-functions.js"

export function createProductDivInfo ({total, address}) {
    const divInfo = document.createElement('div')
    divInfo.setAttribute('class', 'divInfo')

    const divResult = document.createElement('div')
    divResult.setAttribute('class', 'divResult')
    const pTotal = document.createElement('p')
    pTotal.setAttribute('id', 'pTotal')
    pTotal.innerText = `${total}`
    divResult.append(pTotal)

    const pResultAddress = document.createElement('p')
    pResultAddress.innerText = ` Imóveis a venda em ${address.city} - ${address.stateAcronym}`
    divResult.append(pResultAddress)

    divInfo.append(divResult)

    const pInfoAddress = document.createElement('p')
    pInfoAddress.setAttribute('class', 'pInfoAddress')
    pInfoAddress.setAttribute('id', 'pInfoAddressPW')
    pInfoAddress.innerText = `${address.city} - ${address.stateAcronym}`
    divInfo.append(pInfoAddress)

    const divAddressChoice = document.createElement('div')
    divAddressChoice.setAttribute('class', 'pInfoAddress')
    divAddressChoice.setAttribute('id', 'addressChoicePO')
    const pAddressChoice = document.createElement('p')
    pAddressChoice.innerText = `${address.city} - ${address.stateAcronym}`
    divAddressChoice.append(pAddressChoice)
    const divlocalizationPO = document.querySelector('.localizationPO')
    divlocalizationPO.append(divAddressChoice)

    return divInfo
}

export function createProductDivView (value) {  

    const div = document.createElement('div')
    div.classList.add('productDiv')
    const img = document.createElement('img')
    img.classList.add('productPicture')
    img.src = `${value.medias[0].url}` 
    div.append(img) 

    const divContact = document.createElement('div')
    divContact.classList.add('divContact')

    const pPhone = document.createElement('p')
    pPhone.innerText = 'TELEFONE'
    divContact.append(pPhone)

    const pMessage = document.createElement('p')
    pMessage.innerText= 'ENVIAR MENSAGEM'
    divContact.append(pMessage)

    div.append(divContact)

    const divAd = document.createElement('div')
    divAd.classList.add('productAd')

    const pAddress = document.createElement('p')
    pAddress.setAttribute('id', 'pAddress')
    pAddress.innerText = `${value.link.data.street}, ${value.link.data.streetNumber} - ${value.link.data.neighborhood}, ${value.link.data.city} - ${value.listing.address.stateAcronym}`
    divAd.append(pAddress)

    const pName = document.createElement('p')
    pName.setAttribute('id', 'pName')
    pName.innerText = `${value.link.name}`
    divAd.append(pName)

    const pListing = document.createElement('p')
    pListing.setAttribute('id', 'pListing')
    pListing.innerHTML = ` ${value.listing.usableAreas} <p>m²</p> ${(value.listing.bedrooms>1) ? `${(value.listing.bedrooms)} <p>Quartos</p>` : `${(value.listing.bedrooms)} <p>Quarto</p>`} ${(value.listing.bathrooms>1) ? `${(value.listing.bathrooms)} <p>Banheiros</p>` : `${(value.listing.bathrooms)} <p>Banheiro</p>`} ${(value.listing.parkingSpaces>1) ? `${(value.listing.parkingSpaces)} <p>Vagas</p>` : `${(value.listing.parkingSpaces)} <p>Vaga</p>`} `
    divAd.append(pListing)

    const divAmenities = document.createElement('div')
    divAmenities.setAttribute('id', 'divAmenities')
    value.listing.amenities.forEach( element => {
        const p = document.createElement('p')
        p.classList.add('pAmenities')
        const dictionary = translate()
        const translatedWord = dictionary.get(element)
        p.append(translatedWord);
        divAmenities.append(p);
    });
    divAd.append(divAmenities)

    const divPricingInfos = document.createElement('div')
    divPricingInfos.setAttribute('id', 'divPricingInfos')

    const h1PricingInfos = document.createElement('h1')
    h1PricingInfos.setAttribute('id', 'h1PricingInfos')
    h1PricingInfos.innerText = `R$ ${ Number(value.listing.pricingInfos[0].price).toLocaleString() }`
    divPricingInfos.append(h1PricingInfos)  
    

    const divCondoPricingInfos = document.createElement('div')
    divCondoPricingInfos.setAttribute('id', 'divCondoPricingInfos')    

    const pCondoPricingInfos = document.createElement('p')
    pCondoPricingInfos.innerText = `R$  ${ Number(value.listing.pricingInfos[0].monthlyCondoFee).toLocaleString() }`    
    divCondoPricingInfos.innerText = 'Condomínio:'
    divCondoPricingInfos.append(pCondoPricingInfos)
    value.listing.pricingInfos[0].monthlyCondoFee ? divPricingInfos.append(divCondoPricingInfos) : null
    divAd.append(divPricingInfos)
    div.append(divAd)

    const dynamicDiv = document.querySelector('.dynamicDiv')    
    dynamicDiv.append(div)
}