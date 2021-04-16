    console.log('%c HI', 'color: firebrick')
// // const init = () => {
//  //fetchImg()
// // addDogImages()
// handleFetch()
// // };

// // document.addEventListener("DOMContentLoaded", init);    

// // fetchImg()
// // addDogImages()


// //  const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

// // function fetchImg(){
// //     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// //     fetch(imgUrl)
// //     .then(res => res.json)
// //     .then(data => data.message.forEach(addDogImages))
// // }


// // function addDogImages(image) {
// //     const dogImages = document.querySelector("#dog-image-conatiner");
// //     const dogImage = document.createElement("img");
    
// //     dogImage.src = image;
// //     dogImage.className = "dog-image";
    
// //     dogImages.append(dogImage)
// // }

// function handleFetch() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
//     fetch(imgUrl)
//     .then(res => res.json())
//     .then(function(data) {
//         // data.message.forEach(image => addImg(image));
//         data.message.forEach(addImg);
//     })
// }

// function addImg(y) {
//     const z = document.createElement('img')
//     document.querySelector('#dog-image-container').append(z)
//     z.src = y
// }

//ADAMS WAY
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
// const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

// getDogImages()
// getDogBreeds()
// filterHandler()

// let allBreeds = []

// function getDogImages() {
// fetch(imgUrl)
// .then(res => res.json())
// .then(data => {
//     data.message.forEach(renderImage)
// })
// }

// function renderImage(dogUrl) {
//     //define any logic here will run on each individual image URL

//     //create a new img element
//     const newImg = document.createElement('img')

//     //update the newImg with the imgURL
//     newImg.src = dogUrl
    
//     //tell the image to live on the DOM, grab the parent element
//     document.querySelector('#dog-image-container').appendChild(newImg)
// }

// function getDogBreeds() {
//     fetch(breedUrl)
//     .then(res => res.json())
//     .then(data => Object.keys(data.message).forEach((breed) => {

//         allBreeds = Object.keys(data.message)
//         const newLi = document.createElement('li')
//         newLi.innerText = breed
//         document.querySelector('#dog-breeds').appendChild(newLi)

//         newLi.addEventListener('click', (event) => {

//             const colors = ['orange', 'red', 'blue', 'purple', 'green']
//             const randomColor = colors[Math.floor(Math.random()*colors.length)]
//             event.target.style.color = randomColor
//         })
//     }))
// }

// // function filterHandler() {
// //     document.querySelector("#breed-dropdown").addEventListener("change", (e) => {
// //         console.log(allBreeds.filter(breed => breed[0] === e.target.value))
// //         document.querySelector('#dog-breeds').innerHTML = ""
// //         allBreeds.filter(breed => breed[0] === e.target.value).forEach(breedName => {
// //             const newLi = document.createElement('li')
// //         })
// //     })
// // }

const imgURl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let allBreeds = []

fetchImg()
fetchDogBreeds()


function fetchImg() {
    fetch(imgURl)
    .then(res => res.json())
    .then(data => data.message.forEach(addImg))
}

function addImg(doge) {
    const newImg = document.createElement('img')
    newImg.src = doge
    document.querySelector('#dog-image-container').appendChild(newImg)
}

function fetchDogBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => Object.keys(data.message).forEach((breed) => {
        allBreeds = Object.keys(data.message)
        const newLi = document.createElement('li')
        newLi.innerText = breed
        document.querySelector('#dog-breeds').appendChild(newLi)
        newLi.addEventListener('click', (event) => {
            const colors = ['orange', 'red', 'blue', 'purple', 'green']
            const randomColor = colors[Math.floor(Math.random()*colors.length)]
            event.target.style.color = randomColor
        })
    }))
}