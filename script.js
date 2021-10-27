"use strict"

let dogs=[]


dogs.push({name:"Fluffy",breed:"Poodle",picture:"",age:12})
dogs.push({name:"Otto",breed:"Chihuahua",picture:"",age:14})
dogs.push({name:"Padre",breed:"Greyhound",picture:"",age:19})
dogs.push({name:"Louwee",breed:"American Pitbull Terrier",pictures:"",age:22})
dogs.push({name:"Snoopy",breed:"Husky",pictures:"",age:20})
dogs.push({name:"Kaiser",breed:"German Sheperd",pictures:"",age:20})

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for (let i=0; i<dogs.length; i++){

    let card = document.createElement("div")
    document.body.appendChild(card)
    let dogName = document.createElement("h1")
    card.appendChild(dogName)
    document.body.style.backgroundColor = "yellow" //Changes background colour
    card.style.backgroundColor = "blue" //Changes colour of the card
    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)
    let dogPicture = document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src = dogs[i].picture
    let dogAge = document.createElement("p")
    card.appendChild(dogAge)
    card.style.padding = 300 + "px"
    card.style.margin = 400 + "px"
    dogName.innerHTML = dogs[i].name
    dogBreed.innerHTML = dogs[i].breed
    dogPicture.innerHTML = dogs[i].picture
    dogAge.innerHTML = dogs[i].age
}

