console.log('veikia')

       

for (let i=0; i < persons.length; i++) {
    console.log(persons[i])

    let card = document.createElement('div')
    card.className = "card"
    card.style.width = '27rem'

    let cardBody = document.createElement('div')
    cardBody.className = "card-body"

    let cardTitle = document.createElement('h5')
    cardTitle.className = "card-title"
    // cardTitle.style.firstLetter = '35px'
    // cardTitle.style.paddingBottom = '10px'
    // cardTitle.style.textTransform = 'capitalize'
    cardTitle.style.textTransform = 'uppercase'
    cardTitle.innerText = persons[i].name

    let cardSubtitle = document.createElement('h6')
    cardSubtitle.className = "card-subtitle mb-2 text-muted"
    cardSubtitle.innerText = 'Categories' + ' '

    document.body.appendChild(card)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardTitle.appendChild(cardSubtitle)

    for (let j=0; j < persons[i].categories.length; j++) {

        let card = createCategory(persons[i].categories[j])
        console.log(card)
        cardSubtitle.appendChild(card)
        // console.log(persons[i].categories[j])
    }

    function createCategory(category) {
        let cardText = document.createElement('button')
        cardText.className = "btn btn-outline-dark"
        cardText.innerText += category

        // cardSubtitle.appendChild(cardText)
        // console.log(cardText)

        return cardText
    }

    let container = document.createElement('div')
        container.className = "container text-center"

        let row = document.createElement('div')
        row.className = "row"

        let carsOwned = document.createElement('h5')
        carsOwned.className = "card-title"
        carsOwned.style.width = '30%'
        carsOwned.innerText = 'Cars owned:'

        let colSm = document.createElement('div')
        colSm.style.width = '35%'
        colSm.className= "col-sm-6"

        let card1 = document.createElement('div')
        card1.className = "card"

        card.appendChild(container)
        container.appendChild(row)
        row.appendChild(carsOwned)
        row.appendChild(colSm)
        colSm.appendChild(card1)


    for (k=0; k < persons[i].owned_cars.length; k++) {

        //let carCard = createCarCard(persons[i].owned_cars[k])
        //console.log(carCard)
        //colSm.appendCild(carCard)

        // reikia perkelti i funkcija
        

        let cardColor = document.createElement('div')
        cardColor.className = "card-body"
        cardColor.style.background = persons[i].owned_cars[k].car_options.color

        let carBrand = document.createElement('h5')
        carBrand.className = "card-title"
        carBrand.innerText = persons[i].owned_cars[k].brand

        let carModel = document.createElement('h6')
        carModel.className = "card-title"
        carModel.style.textTransform = 'capitalize'
        carModel.innerText = persons[i].owned_cars[k].model

        let carTransmission = document.createElement('p')
        carTransmission.className = "card-text"
        carTransmission.style.fontSize = '10px'
        carTransmission.style.textTransform = 'capitalize'
        carTransmission.innerText = persons[i].owned_cars[k].car_options.transmission

        card1.appendChild(cardColor)
        cardColor.appendChild(carBrand)
        cardColor.appendChild(carModel)
        cardColor.appendChild(carTransmission)
    }

    // function createCarCard(model, brand, transmission, color) {
        
        
        // let cardColor = document.createElement('div')
        // cardColor.className = "card-body"
        // cardColor.style.background = owned_cars.car_options.color

        // let carBrand = document.createElement('h5')
        // carBrand.className = "card-title"
        // carBrand.innerText = owned_cars.brand

        // let carModel = document.createElement('h6')
        // carModel.className = "card-title"
        // carModel.style.textTransform = 'capitalize'
        // carModel.innerText = owned_cars.model

        // let cardText1 = document.createElement('p')
        // cardText1.className = "card-text"
        // cardText1.style.fontSize = '10px'
        // cardText1.style.textTransform = 'capitalize'
        // cardText1.innerText = owned_cars.car_options.transmission

        // card1.appendChild(cardColor)
        // cardColor.appendChild(carBrand)
        // cardColor.appendChild(carModel)
        // cardColor.appendChild(carTransmission)

        // return card1
    // }
    
}