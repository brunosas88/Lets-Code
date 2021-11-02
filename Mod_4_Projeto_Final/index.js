const dynamicDiv = document.querySelector('.dynamicDiv')

const createProductDivInfo = ({total, address}) => {
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


    return divInfo
}

const translate = () => {
    let tradution = new Map();
    tradution.set("PARTY_HALL", 'Salão de festas')
    tradution.set("FURNISHED", 'Mobiliado')
    tradution.set('FIREPLACE', 'Lareira')
    tradution.set('POOL', 'Piscina')
    tradution.set('BARBECUE_GRILL', 'Churrasqueira')
    tradution.set('AIR_CONDITIONING', 'Ar-condicionado')
    tradution.set('ELEVATOR', 'Elevador')
    tradution.set('BICYCLES_PLACE', 'Bicicletário')
    tradution.set('GATED_COMMUNITY', 'Condomínio fechado')
    tradution.set('PLAYGROUND', 'Playground')
    tradution.set('SPORTS_COURT', 'Quadra de esportes')
    tradution.set('PETS_ALLOWED', 'Aceita animais')
    tradution.set('AMERICAN_KITCHEN', 'Cozinha americana')
    tradution.set('TENNIS_COURT', 'Quadra de tênis')
    tradution.set('LAUNDRY', 'Lavanderia')
    tradution.set('GYM', 'Academia')
    tradution.set('ELECTRONIC_GATE', 'Portão eletrônico')
    tradution.set('CINEMA', 'Cinema')
    tradution.set('SAUNA', 'Sauna')
    tradution.set('GARDEN', 'Jardim')

    return tradution
}

const adjustWords = (word) => {
    const adjustedWord = word.toLowerCase().replace(/\s/g, '');
    const dictionary = new Map();
    let result = {state: '', city: ''}
    dictionary.set('sp', 'sao-paulo')
    dictionary.set('saopaulo', 'sao-paulo')
    dictionary.set('sãopaulo', 'sao-paulo')
    dictionary.set('rj', 'rio-de-janeiro')
    dictionary.set('riodejaneiro', 'rio-de-janeiro')

    dictionary.set('sao-paulo', 'sp')
    dictionary.set('rio-de-janeiro', 'rj')

    dictionary.get(`${adjustedWord}`) ? result = {city: dictionary.get(`${adjustedWord}`), state: dictionary.get(dictionary.get(`${adjustedWord}`))} : null

    return result
}

const createProductDivView = (value) => {  

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

    const pListing = document.createElement('p') // OU DIV SERÁ MELHOR?
    pListing.setAttribute('id', 'pListing')
    //pListing.innerText = `${value.listing.usableAreas} m² ${(value.listing.bedrooms>1) ? `${(value.listing.bedrooms)} Quartos` : `${(value.listing.bedrooms)} Quarto`} ${(value.listing.bathrooms>1) ? `${(value.listing.bathrooms)} Banheiros` : `${(value.listing.bathrooms)} Banheiro`} ${(value.listing.parkingSpaces>1) ? `${(value.listing.parkingSpaces)} Vagas` : `${(value.listing.parkingSpaces)} Vaga`} `
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
    dynamicDiv.append(div)
}

const getApartaments = async (selection) => {
    try {
        const result = adjustWords (selection)
        console.log(result)

        const bruteData = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?state=${result.state}&city=${result.city}`);
        const data = await bruteData.json();        
        dynamicDiv.innerHTML=''
        dynamicDiv.append(createProductDivInfo({total: data.search.totalCount, address: data.search.result.listings[0].listing.address}))
        data.search.result.listings.forEach(createProductDivView)
        cleanDynamicDiv()
        console.log(data)
    } catch (error) {
        console.log("Error in function getApartaments");
    }
}

function main () {
    const inputChoice = document.querySelector('#cityChoice')
        inputChoice.addEventListener('change', (e) => {
        const selection = e.target.value
        e.target.value = ''
        getApartaments(selection)
        
    })

}

function cleanDynamicDiv () {
    const pInfoAddress = document.querySelector('#pInfoAddressPW')
    pInfoAddress.addEventListener('click', (e) => {
        dynamicDiv.innerHTML=''
    })
}

function menuController () {
    const menuProductView = document.querySelectorAll("li.productMenuLi")
    menuProductView.forEach( (li) => {
        li.addEventListener('click', (e) => {
            const allLi = document.querySelectorAll("li.productMenuLi")
            allLi.forEach((li) =>{
                li.removeAttribute('id','menuActive')
            })
            li.setAttribute('id','menuActive')
        })
    } )
}
main()
menuController()