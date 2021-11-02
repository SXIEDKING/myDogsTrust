/*"use strict"

let dogs=[]


dogs.push({name:"Fluffy",breed:"Poodle",picture:"",age:7})
dogs.push({name:"Otto",breed:"Chihuahua",picture:"",age:8})
dogs.push({name:"Padre",breed:"Greyhound",picture:"",age:6})
dogs.push({name:"Louwee",breed:"American Pitbull Terrier",pictures:"",age:8})
dogs.push({name:"Snoopy",breed:"Husky",pictures:"",age:7})
dogs.push({name:"Kaiser",breed:"German Sheperd",pictures:"",age:7})

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

    document.body.style.backgroundColor = "white" //Changes background colour
    card.style.backgroundColor = "yellow" //Changes colour of the card

    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)

    let dogPicture = document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src = dogs[i].picture

    let dogAge = document.createElement("p")
    card.appendChild(dogAge)
    card.style.padding = 5 + "px"
    card.style.margin = 5 + "px"
    
    dogName.innerHTML = dogs[i].name

    dogBreed.innerHTML = dogs[i].breed

    dogPicture.innerHTML = dogs[i].picture

    dogAge.innerHTML = dogs[i].age
} */

/*"use strict"


let dogs=[]

dogs.push({Name:"Fluffy", Breed:"Poodle", Picture:"https://1.bp.blogspot.com/-HGHeu9tMAVk/X38fEMeFTAI/AAAAAAAABpU/DlZnIO_c7q8b98uUYSX02wEsgOpib7xzQCLcBGAsYHQ/s616/toy-poodle-puppy-price-in-india.png", Age: "7 months"})
dogs.push({Name:"Otto", Breed:"Chihuahua", Picture:"https://i.pinimg.com/originals/cc/66/5b/cc665b8cc5fd3a0f416c37c437f10a9d.jpg", Age: "2 years old"})
dogs.push({Name:"Alfie", Breed:"French Bulldog", Picture:"https://www.lovelyhomefenchbulldogs.com/wp-content/uploads/2020/10/e31d4008-3462-43d4-a45d-cf05aa3421d0.jpg", Age: "6 months"})
dogs.push({Name:"Ruby", Breed:"Pomeranian", Picture:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg", Age: "3 months"})
dogs.push({Name:"Sparkie", Breed:"Golden Retriever", Picture:"https://i.pinimg.com/originals/59/df/de/59dfde6234ce23109248065208283059.jpg", Age: "1 year old"})
dogs.push({Name:"Koko", Breed:"Jack Russell", Picture:"https://i.pinimg.com/originals/b5/ae/79/b5ae797a411df740484ededb704a33cd.jpg", Age: "3 months"})
for (let i=0; i<dogs.length; i++){
    let card = document.createElement("div") //Creates div
    document.body.appendChild(card)
    let dogName = document.createElement("h1") //Creates dogName in h1
    card.appendChild(dogName)
    dogName.style.backgroundColor = "yellow"
    
    document.body.style.backgroundColor = "yellow" //Changes background colour
    card.style.backgroundColor = "cyan" //Changes colour of the card
    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)
    let dogPicture = document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src = dogs[i].Picture
    dogPicture.style.width = 500 + "px"
    dogPicture.style.height = "auto"
    let dogAge = document.createElement("p")
    card.appendChild(dogAge)
    dogAge.style.fontWeight = "bold"
    card.style.padding = 300 + "px"
    card.style.margin = 400 + "px"
    card.style.borderRadius = 100 + "px"
    let button = document.createElement("button")
    card.appendChild(button)
    card.style.fontFamily = "Helvetica"
    dogName.innerHTML = dogs[i].Name
    dogBreed.innerHTML = dogs[i].Breed
    dogPicture.innerHTML = dogs[i].Picture
    dogAge.innerHTML = dogs[i].Age
    button.innerHTML = "Adopt Now"
}*/

/*"use strict"
let dogs=[]
dogs.push({Name:"CoCo", Breed:"Poodle", Picture:"https://1.bp.blogspot.com/-HGHeu9tMAVk/X38fEMeFTAI/AAAAAAAABpU/DlZnIO_c7q8b98uUYSX02wEsgOpib7xzQCLcBGAsYHQ/s616/toy-poodle-puppy-price-in-india.png", Age: "7 months"})
dogs.push({Name:"Fluffy", Breed:"Chihuahua", Picture:"https://i.pinimg.com/originals/cc/66/5b/cc665b8cc5fd3a0f416c37c437f10a9d.jpg", Age: "2 years old"})
dogs.push({Name:"Padre", Breed:"Greyhound", Picture:"https://www.lovelyhomefenchbulldogs.com/wp-content/uploads/2020/10/e31d4008-3462-43d4-a45d-cf05aa3421d0.jpg", Age: "6 months"})
dogs.push({Name:"Louwee", Breed:"Pitbull terrier", Picture:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg", Age: "3 months"})
dogs.push({Name:"Snoopy", Breed:"Husky", Picture:"https://i.pinimg.com/originals/59/df/de/59dfde6234ce23109248065208283059.jpg", Age: "1 year old"})
dogs.push({Name:"Kaiser", Breed:"German Sheperd", Picture:"https://i.pinimg.com/originals/b5/ae/79/b5ae797a411df740484ededb704a33cd.jpg", Age: "3 months"})

function showDogs(){
for (let i=0; i<dogs.length; i++){
    let card = document.createElement("div") //Creates div
    document.body.appendChild(card)
    let dogName = document.createElement("h1") //Creates dogName in h1
    card.appendChild(dogName)
    dogName.style.backgroundColor = "yellow"
    
    document.body.style.backgroundColor = "yellow" //Changes background colour
    card.style.backgroundColor = "cyan" //Changes colour of the card
    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)
    let dogPicture = document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src = dogs[i].Picture
    dogPicture.style.width = 500 + "px"
    dogPicture.style.height = "auto"
    let dogAge = document.createElement("p")
    card.appendChild(dogAge)
    dogAge.style.fontWeight = "bold"
    card.style.padding = 300 + "px"
    card.style.margin = 400 + "px"
    card.style.borderRadius = 100 + "px"
    let button = document.createElement("button")
    card.appendChild(button)
    card.style.fontFamily = "Helvetica"
    dogName.innerHTML = dogs[i].dogName()
    dogBreed.innerHTML = dogs[i].dogBreed()
    dogPicture.innerHTML = dogs[i].dogPicture()
    dogAge.innerHTML = dogs[i].dogAge()
    button.innerHTML = "Adopt Now"
}*/

/*"use strict"

function showDogs(){

    for (let i=0;i<Dog.length;i++){
    
        let card = document.createElement("div") //Creates div
        card.classList.add("card")
        document.getElementById("cardholder").appendChild(card)
        document.body.appendChild(card)

        let dogName = document.createElement("h1") //Creates dogName in h1
        card.appendChild(dogName)
        dogName.style.backgroundColor = "yellow"
        
        document.body.style.backgroundColor = "yellow" //Changes background colour
        card.style.backgroundColor = "cyan" //Changes colour of the card
        let dogBreed = document.createElement("h2")
        card.appendChild(dogBreed)
    
        let dogPicture = document.createElement("img")
        dogPicture.classList.add("dogpicture")
        card.appendChild(dogPicture)
        dogPicture.src = Dog[i].picture
        dogPicture.style.width = 500 + "px"
        dogPicture.style.height = "auto"
    
        let dogAge = document.createElement("p")
        card.appendChild(dogAge)
        dogAge.style.fontWeight = "bold"
    
        card.style.padding = 300 + "px"
        card.style.margin = 400 + "px"
        card.style.borderRadius = 100 + "px"
    
        let button = document.createElement("button")
        button.classList.add ("button")
        card.appendChild(button)
    
        card.style.fontFamily = "Helvetica"
        dogName.innerHTML = Dog[i].DogName
        dogBreed.innerHTML = Dog[i].Breed
        dogPicture.innerHTML = Dog[i].picture
        dogAge.innerHTML = Dog[i].age

        button.innerHTML = "Adopt Now"
    }
}

class Dog {
    constructor (dogName, Breed, picture, age){ //Makes an instance of a class
        this.dogName = dogName
        this.Breed = Breed
        this.picture = picture
        this.age = age
    }
}

function setupDogs(){
    Dog.push(new Dog("Fluffy", "Poodle", "https://1.bp.blogspot.com/-HGHeu9tMAVk/X38fEMeFTAI/AAAAAAAABpU/DlZnIO_c7q8b98uUYSX02wEsgOpib7xzQCLcBGAsYHQ/s616/toy-poodle-puppy-price-in-india.png", "7 months"))
    Dog.push(new Dog("Otto", "Chihuahua", "https://i.pinimg.com/originals/cc/66/5b/cc665b8cc5fd3a0f416c37c437f10a9d.jpg", "2 years old"))
    Dog.push (new Dog("Alfie", "French Bulldog", "https://www.lovelyhomefenchbulldogs.com/wp-content/uploads/2020/10/e31d4008-3462-43d4-a45d-cf05aa3421d0.jpg", "6 months"))
    Dog.push (new Dog("Ruby", "Pomeranian", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg", "3 months"))
    Dog.push (new Dog("Sparkie", "Golden Retriever", "https://i.pinimg.com/originals/59/df/de/59dfde6234ce23109248065208283059.jpg", "1 year old"))
    Dog.push (new Dog("Koko", "Jack Russell", "https://i.pinimg.com/originals/b5/ae/79/b5ae797a411df740484ededb704a33cd.jpg", "3 months"))
}

setupDogs()
showDogs() */


"use strict"

let dogs=[] //creates the dogs array

/*function showDogs(){ //functions used to create the cards

    let dogsPanel=document.getElementById("dogs")
    dogsPanel.innerHTML=''

    for(let i=0;i<dogs.length;i++){   //takes the length of the dogs array which changes depending on how many dogs i have created and then runs the code inside it that many times
        
        let dog=dogs[i]

        //creates card ------
        let card = document.createElement("div")
        card.classList.add("card")          //gives the variable card a class which can be called in css
        document.getElementById("cardHolder").appendChild(card).style.padding = 50 + "px"; //adds padding to the div

        //creates dog name
        let dogName=document.createElement("h1")
        card.appendChild(dogName)
        dogName.innerHTML=dogs[i].name

        //create dog breed
        let dogBreed=document.createElement("h2")
        card.appendChild(dogBreed)
        dogBreed.innerHTML=dogs[i].breed

        //create dog age
        let dogAge=document.createElement("h3")
        card.appendChild(dogAge)
        dogAge.innerHTML=dogs[i].age

        //create dog image
        let dogPic=document.createElement("img")
        card.appendChild(dogPic)
        dogPic.src=dogs[i].picture
        dogPic.classList.add("dogpic")

        //create adopt button
        let adopt=document.createElement("button")
        adopt.innerHTML = "Adopt Now"
        card.appendChild(adopt)
        adopt.classList.add("adoptbutton")
        adopt.onclick = function clicked()
        {
            alert("sorry this dog has been adopted already")
        }
    }
}
function setupDogs() //function to setup the dog instances and info
{
    dogs.push(new Dogs(this.dogName, this.breed,this.age))
    dogs.push(new Dogs("Winnie", "Staffy", "9" ,"https://hellobark.com/wp-content/uploads/dora-the-staffy-3.jpg"))             
    dogs.push(new Dogs("Otto", "Dachshund/Terrier", "10" ,"https://www.thesprucepets.com/thmb/ogyI-LMgHZvFWD12g184pILAdUA=/2116x1190/smart/filters:no_upscale()/Westie-74f76b3f57e643639d67298018374e39.jpg"))       
    dogs.push(new Dogs("Otis", "Husky", "4" ,"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26155623/Siberian-Husky-standing-outdoors-in-the-winter.jpg"))                   
    dogs.push(new Dogs("Cheyenne", "German Shepherd", "6" ,"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg"))   
    dogs.push(new Dogs("Bianca", "Golden Retriever", "8" ,"https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwcmV0cmlldmVyJTIwcHVwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"))          
    dogs.push(new Dogs("Hana", "Shiba Inu", "3" ,"https://firstclasse.com.my/wp-content/uploads/2021/06/fetchimage.jpg"))    
}

class Dogs{ //class for all the dog instances
   
   //properties
    dogName
    breed
    age 
    picture

    constructor(dogName,breed,age,picture)
    {
        this.dogName=dogName
        this.breed=breed
        this.age=age
        this.picture=picture
    }

    
}

setupDogs() //runs the function creating the dog instances
showDogs()  //runs the function creating the cards so the dogs will actually show

function saveDog(){
    //use getElementById to read the VALUE (or text) from the input elements
    //Instance a new Dog from these values - and push (that) dog into your dogs array
    let dogName=document.getElementById("dogName").value
    let breed=document.getElementById("breed").value
    let age=document.getElementById("age").value

    showDogs()

    e.preventDefault()
    return false 

}*/

function addDog(ev){
    ev.preventDefault() //Stop the form from submitting and refreshing
    let newDog = {
        name: document.getElementById("dogName").value, //In HTML button value="save"
        Breed: document.getElementById("breed").value,
        age: document.getElementById("age").value,
        picture: ""
        }
        dogs.push(newDog) //Adds each dog to the original array
        document.getElementById("newDogForm").reset() //To clear form for the next entries
        console.log ('added', {dogs})
    
        //saving to localStorage
        localStorage.setItem('persist', JSON.stringify(dogs))
    }
    
    document.getElementById("btn").addEventListener("click", addDog)
    
    const draggableElement = document.querySelector("#drag")
    draggableElement.addEventListener("dragstart", e =>{
    console.log(e)
    
    })
    
    function showDogs(){
    
        for (let i=0;i<dogs.length;i++){
        
            let card = document.createElement("div") //Creates div
            card.classList.add("card")
            document.getElementById("cardholder").appendChild(card)
            document.body.appendChild(card)
    
            let dogName = document.createElement("h1") //Creates dogName in h1
            card.appendChild(dogName)
            dogName.style.backgroundColor = "purple"
            
            document.body.style.backgroundColor = "violet" //Changes background colour
            card.style.backgroundColor = "white--" //Changes colour of the card
            let dogBreed = document.createElement("h2")
            card.appendChild(dogBreed)
        
            let dogPicture = document.createElement("img")
            dogPicture.classList.add("dogpicture")
            card.appendChild(dogPicture)
            dogPicture.src = dogs[i].picture
            dogPicture.style.width = 500 + "px"
            dogPicture.style.height = "auto"
        
            let dogAge = document.createElement("p")
            card.appendChild(dogAge)
            dogAge.style.fontWeight = "bold"
        
            card.style.padding = 300 + "px"
            card.style.margin = 400 + "px"
            card.style.borderRadius = 100 + "px"
        
            let button = document.createElement("button")
            button.classList.add ("button")
            card.appendChild(button)
        
            card.style.fontFamily = "Helvetica"
            dogName.innerHTML = dogs[i].name
            dogBreed.innerHTML = dogs[i].Breed
            dogPicture.innerHTML = dogs[i].picture
            dogAge.innerHTML = dogs[i].age
    
            button.innerHTML = "Adopt Now"
        }
    }
    
    class Dog {
        constructor (name, Breed, picture, age){ //Makes an instance of a class
            this.name = name
            this.Breed = Breed
            this.picture = picture
            this.age = age
        }
    }
    
    function setupDogs(){
        dogs.push(new Dog("Fluffy", "Poodle", "https://1.bp.blogspot.com/-HGHeu9tMAVk/X38fEMeFTAI/AAAAAAAABpU/DlZnIO_c7q8b98uUYSX02wEsgOpib7xzQCLcBGAsYHQ/s616/toy-poodle-puppy-price-in-india.png", "7 months"))
        dogs.push(new Dog("Otto", "Chihuahua", "https://i.pinimg.com/originals/cc/66/5b/cc665b8cc5fd3a0f416c37c437f10a9d.jpg", "2 years old"))
        dogs.push (new Dog("Alfie", "French Bulldog", "https://www.lovelyhomefenchbulldogs.com/wp-content/uploads/2020/10/e31d4008-3462-43d4-a45d-cf05aa3421d0.jpg", "6 months"))
        dogs.push (new Dog("Ruby", "Pomeranian", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg", "3 months"))
        dogs.push (new Dog("Sparkie", "Golden Retriever", "https://i.pinimg.com/originals/59/df/de/59dfde6234ce23109248065208283059.jpg", "1 year old"))
        dogs.push (new Dog("Koko", "Jack Russell", "https://i.pinimg.com/originals/b5/ae/79/b5ae797a411df740484ededb704a33cd.jpg", "3 months"))
    }
    
    setupDogs()
    showDogs()
