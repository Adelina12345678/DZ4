// CONVERTER
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const euroInput = document.querySelector('#eur')

const converter = async (element, targetElement, targetElement2) => {
    const response = await fetch('../data/converter.json')
    const data = response.json()

    switch(element.id) {
        case 'som':
            targetElement.value = (element.value / data.usd).toFixed(2)
            targetElement2.value = (element.value / data.eur).toFixed(2)
            break
        case 'usd':
            targetElement.value = (element.value * data.usd).toFixed(2)
            targetElement2.value = (element.value * data.usd / data.eur).toFixed(2)
            break
        case 'eur':
            targetElement.value = (element.value * data.eur).toFixed(2)
            targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
            break
    }

    if(element.value === '') {
        targetElement.value = ''
        targetElement2.value = ''
    }


}


converter(somInput, usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)