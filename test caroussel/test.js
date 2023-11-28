// Crée le conteneur du carrousel
const carouselContainer = document.createElement('div');
carouselContainer.classList.add('carousel-container');

// Crée le carrousel
const carousel = document.createElement('div');
carousel.classList.add('carousel');

// Ajoute chaque diapositive au carrousel
const slidesContent = [
  { image: "./téléchargement.jpg", title: 'Restaurant Gastronomique', buttonText: 'Réservez', description: 'Nous vous accueillons au déjeuner de 12h à 13h30 et au dîner de 19h30 à 21h30...' },
  { image: './téléchargement (1).jpg', title: 'La Cave', buttonText: 'La carte', description: 'De sublimes references du monde entier... Dégustez au restaurant ou emportez votre bouteille à la maison...' },
  { image: './téléchargement (2).jpg', title: 'Restaurant Gastronomique', buttonText: 'En savoir plus', description: 'La terrasse est actuellement fermée.' },
];

let touchStartX = 0;
let touchEndX = 0;
let currentIndex = 0;

slidesContent.forEach((content, index) => {
  const cardService = document.createElement('div');
  cardService.classList.add('card-service');

  const image = document.createElement('img');
  image.src = content.image;
  image.alt = content.title;

  const title = document.createElement('h3');
  title.textContent = content.title;

  const button = document.createElement('button');
  button.classList.add('btn-2');
  button.textContent = content.buttonText;

  const description = document.createElement('p');
  description.textContent = content.description;

  cardService.appendChild(image);
  cardService.appendChild(title);
  cardService.appendChild(button);
  cardService.appendChild(description);

  carousel.appendChild(cardService);

  // Mise en place d'événements pour suivre le glissement
  cardService.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  cardService.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });
});

carouselContainer.appendChild(carousel);

const counter = document.createElement('div');
counter.classList.add('counter');
counter.textContent = `1 / ${slidesContent.length}`;
carouselContainer.appendChild(counter);

document.body.appendChild(carouselContainer);

function handleSwipe() {
  const threshold = 50;

  const deltaX = touchEndX - touchStartX;

  if (deltaX > threshold && currentIndex > 0) {
    // Glissement vers la droite, affiche la diapositive précédente
    currentIndex--;
  } else if (deltaX < -threshold && currentIndex < slidesContent.length - 1) {
    // Glissement vers la gauche, affiche la diapositive suivante
    currentIndex++;
  }

  updateCarousel();
  updateCounter();

}

function updateCarousel() {
  const translateX = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateX + ')';
}

function updateCounter() {
  counter.textContent = `${currentIndex + 1} / ${slidesContent.length}`;
}