//theme sombre fuction

// const THEME_SOMBRE = document.getElementById('sombre');

// THEME_SOMBRE.addEventListener('click', () => {
//     const SOMBRE = document.body;

//     SOMBRE.classList.toggle('sombre');
//     if (THEME_SOMBRE.innerHTML === '🌚') {
//         THEME_SOMBRE.innerHTML === '🌞';
//     }
//     else {
//         THEME_SOMBRE.innerHTML === '🌚'
//     }
// });

// const LINKS = document.getElementById('links');
// const BURGER = document.getElementById('burger');

// BURGER.addEventListener('click', () => {
//     LINKS.classList.toggle('active');
// });

//jeux de cartes (memory game)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card'); // Sélectionne toutes les cartes

    let cardOne = null;
    let cardTwo = null;
    let lockBoard = false;
    let matchedPairs = 0;

    // Ajoute un événement au clic sur chaque carte
    cards.forEach(card => card.addEventListener('click', flipCard));

    function flipCard(e) {
        let clickedCard = e.currentTarget; // La carte cliquée

        // Si la carte cliquée est déjà la première ou si le board est verrouillé
        if (clickedCard === cardOne || lockBoard) return;

        clickedCard.classList.add("flip"); // Retourne la carte

        if (!cardOne) {
            // On assigne la première carte
            cardOne = clickedCard;
            return;
        }

        cardTwo = clickedCard; // Assigne la deuxième carte
        lockBoard = true; // Verrouille le board pour empêcher d'autres clics

        const IMG1 = cardOne.querySelector("img").src;
        const IMG2 = cardTwo.querySelector("img").src;

        checkMatch(IMG1, IMG2); // Vérifie si les images correspondent
    }

    function checkMatch(IMG1, IMG2) {
        if (IMG1 === IMG2) { // Si les images sont identiques
            matchedPairs++; // Incrémente le compteur de paires trouvées

            cardOne.removeEventListener("click", flipCard); // Enlève l'événement de clic de la première carte
            cardTwo.removeEventListener("click", flipCard); // Enlève l'événement de clic de la deuxième carte

            cardOne = cardTwo = null; // Réinitialise les cartes
            lockBoard = false; // Déverrouille le board

            if (matchedPairs === 8) { // Si toutes les paires sont trouvées
                setTimeout(() => {
                    alert('Bravo ! Vous avez trouvé toutes les paires !');
                    shuffleCard();
                }, 500);
            }
            return;
        }

        // Si les cartes ne correspondent pas
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = null;
            lockBoard = false;
        }, 1200);
    }

    function shuffleCard() {
        matchedPairs = 0;
        lockBoard = false;
        cardOne = cardTwo = null;

        // Tableau avec les valeurs des cartes (paires)
        let ArrayCards = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        ArrayCards.sort(() => Math.random() - 0.5); // Mélange les cartes aléatoirement

        // Réinitialise les cartes
        cards.forEach((card, index) => {
            card.classList.remove("flip", "shake"); // Réinitialise les classes "flip" et "shake"
            const img = card.querySelector("img");
            img.src = `./MemoryCardGameImages/img-${ArrayCards[index]}.png`; // Assigne une image à chaque carte
        });

        // Réinitialise les événements de clic
        cards.forEach(card => card.addEventListener("click", flipCard));
    }

    shuffleCard(); // Mélange les cartes au démarrage
});
