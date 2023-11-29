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

/*----------- VERSION AVEC ICONS--------------*/



function previous() {
    document.querySelector('.cardSliderSingle').scrollIntoView({ behavior: 'smooth' });
  }
function next() {
    const cardSliderSingle = document.querySelectorAll('.cardSliderSingle')[1];
    cardSliderSingle.scrollIntoView({ behavior: 'smooth' });
  }
  const prevButton = document.getElementById("prevButton");
  prevButton.addEventListener("click", previous);
  
  const nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", next);
  
  function previous() {
    document.querySelector('.cardSliderSingle:first-child').style.display = 'none';
    document.querySelector('.cardSliderSingle:nth-child(2)').style.display = 'flex';
  }
  


/*----------- END VERSION AVEC ICONS--------------*/

/*----------- VERSION TACTILE--------------*/

//pour cette version je dois remplacer les fonctions previous et next par les fonctions "handleTouchStart", "handlzTouchEnd", "handleSwipe".

// Ajouter des écouteurs d'évenement tactile à l'élément ".cardSlider".

/*
const slide = document.querySelectorAll('.caroussel');

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
}
*/

