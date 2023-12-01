//----------- NAVBAR --------------------------//

//----- toggle -----------//


// Quand l'utilisateur va cliquer sur la toogle bars les liens vont s'ouvrir (slide)
// Quand l'utilisateur va cliquer sur la toogle cross les liens vont ce fermer

//selectionner l'élément à cliquer
// add event listener click

let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");

toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
})



//------------------ WILD FOOD SERVICES---------*/

/*-----------CAROUSEL------------*/


const wrapper = document.querySelector('#wrapper')
const carousel = document.querySelector('#image-carousel')
const images = carousel.querySelectorAll('img')
const btn = document.querySelectorAll('button')
const previous = document.querySelector('#prev')
const nxt = document.querySelector('#next')

images.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})
let counter = 0;

const slideImage = () => {
    images.forEach(
        (e) => {
            e.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}


const prev = () => {
    if (counter > 0) {

        counter--;
        slideImage();
        console.log(counter);
    } 
}

const next = () => {
    if (counter <= (images.length - 2)) {
        counter++;
        slideImage();
        console.log(counter);
    }
}

