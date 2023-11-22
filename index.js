//----------- NAVBAR --------------------------//

//----- toggle -----------//


// Quand l'utilisateur va cliquer sur la toogle bars les liens vont s'ouvrir (slide)
// Quand l'utilisateur va cliquer sur la toogle cross les liens vont ce fermer

//selectionner l'élément à cliquer
// add event listener click

let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");

    toggle.addEventListener("click", function() {
    nav.classList.toggle("open");
})

