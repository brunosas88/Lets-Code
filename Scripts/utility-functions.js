export function translate () {
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

export function menuController () {
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

export function adjustWords (word) {
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

export function cleanMenuDiv () {
    const divAddressChoicePO = document.querySelector('#addressChoicePO')
    divAddressChoicePO.parentNode.removeChild(divAddressChoicePO)
}