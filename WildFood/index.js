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



/*------------------ WILD FOOD SERVICES---------*/

function previous(){
    const widthSlider = document.querySelector('.caroussel').offsetWidth;
    document.querySelector('.cardSlider').scrollLeft -= widthSlider ;
}

function next(){
    const widhtSlider = document.querySelector('.caroussel').offsetWidth;
    document.querySelector('.cardSlider').scrollLeft += widhtSlider ;
}
const prevButton = document.getElementById("previousButton");
prevButton.addEventListener("click", previous);

const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", next);


/*const slide = document.querySelectorAll('.slider-single');

for (const elem of slide) {
    Elem.addEventListener('touchstart', handleTouchEvent);
}

function handleTouchEvent(event) {
    const element = event.target;

    if (element.classList.contains('slider-single')) {
        let direction;
        if (event.touches[0].clientX < element.clientWidth / 2) {
            direction = 'left';
        } else {
            direction = 'right';
        }

        slide(direction);
    }
}*/


