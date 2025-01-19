// CHARACTERS B
const charactersList = document.querySelector('.characters-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/persons.json');

xhr.onload = function() {
    if (xhr.status === 200) {
        const persons = JSON.parse(xhr.responseText);
        persons.forEach(person => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';

            const characterPhoto = document.createElement('div');
            characterPhoto.className = 'character-photo';

            const characterPhotoImg = document.createElement('img');
            characterPhotoImg.src = person.person_photo;
            characterPhotoImg.alt = person.name;

            characterPhoto.appendChild(characterPhotoImg);

            characterCard.appendChild(characterPhoto);
            haracterCard.appendChild(characterPhoto);

            const h3 = document.createElement('h3');
            h3.innerHTML = person.name;
            characterCard.appendChild(h3);




            charactersList.appendChild(characterCard);
        });
    } else {
        console.log('Ошибка при загрузке персонажей');
    }
};

xhr.send();

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', '../data/any.json');

xhr2.onload = () => {
    if (xhr2.status === 200) {
        const data = JSON.parse(xhr2.responseText);
        console.log('Данные :', data);
    } else {
        console.log('Ошибка при загрузке данных');
    }
};


xhr2.send();


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