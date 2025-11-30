//jeux de cartes (memory game)


const CARDS = document.querySelectorAll(".card");

let cardOne = null;
let cardTwo = null;
let lockBoard = false;
let matchedPairs = 0;



function flipCard(e) {
    let clickedCard = e.currentTarget; // la carte cliquée

    // si la carte cliquée n'est pas la carte 1 et que le deck n'est pas desactivé
    if (clickedCard === cardOne || lockBoard) return;// éviter de cliquer deux fois sur la même carte et si le board est verrouillé, on ne peut pas cliquer sur une carte
        clickedCard.classList.add("flip");

        if (!cardOne) {
            // on affecte la valeur de la carte 1 à la clickCard
            cardOne = clickedCard;
            return;
        }

        cardTwo = clickedCard;
        lockBoard = true;

        const IMG1 = cardOne.querySelector("img").src;
        const IMG2 = cardTwo.querySelector("img").src;

        checkMatch(IMG1, IMG2);

    }

// fonction pour vérifier si les cartes correspondent

function checkMatch(IMG1, IMG2) {
    if (IMG1 === IMG2) { // si les images sont identiques
        matchedPairs++; // on incrémente le compteur de paires trouvées

        cardOne = removeEventListener("click", flipCard);
        cardTwo = removeEventListener("click", flipCard);

        cardOne = cardTwo = null;
        lockBoard = false;

        if (matchedPairs === 8) { // si toutes les paires sont trouvées

            // victoire !
            setTimeout(() => {
                alert('Bravo ! vous avez trouvé toutes les paires !');

                shuffleCard();
            }, 500);

        }

        return;
    }

    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    },400);


    // si les images ne sont pas identiques
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
    // création d'un tableau avec les valeurs des cartes
    let ArrayCards = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    ArrayCards.sort(() => Math.random() - 0.5); // mélanger les cartes aléatoirement 



    // enlever la classe flip de chaque carte et assigner une image à chaque carte
    CARDS.forEach((card, index) => {
        card.classList.remove("flip", "shake");
        const img = card.querySelector("img");
        img.src = `./MemoryCardGameImages/img-${ArrayCards[index]}.png`; // assigner une image à chaque carte

        // enlever pour éviter doublons d'écouteurs
        card.replaceWith(card.cloneNode(true));
    });
     // après clone, on doit récupérer les nouvelles cartes
    const newCards = document.querySelectorAll(".card");
    newCards.forEach(card => card.addEventListener("click", flipCard));
};


shuffleCard();