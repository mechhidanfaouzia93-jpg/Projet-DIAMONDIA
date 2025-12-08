//theme sombre fuction

const THEME_SOMBRE = document.getElementById('sombre');

THEME_SOMBRE.addEventListener('click', () => {
    document.body.classList.toggle('sombre');

    // THEME_SOMBRE.textContent === '🌚' ? '🌞' : '🌚';

    if (THEME_SOMBRE.textContent === '🌚') {
        THEME_SOMBRE.textContent = '🌞';
    }
    else {
        THEME_SOMBRE.textContent = '🌚'
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     const THEME_SOMBRE = document.getElementById('sombre');

//     THEME_SOMBRE.addEventListener('click', () => {
//         document.body.classList.toggle('sombre');
        
          
//     });
// });



const LINKS = document.getElementById('links');
const BURGER = document.getElementById('burger');

BURGER.addEventListener('click', () => {
    LINKS.classList.toggle('active');
});


//carousel function


const BUTTONS = document.querySelectorAll('.btn');
const SLIDES = document.querySelectorAll('.slide');

BUTTONS.forEach((button) => {
    button.addEventListener('click', (e) => {
        const direction = e.target.id === "next" ? 1 : -1;

            // Trouver la slide active
        const currentActive = document.querySelector('.slide.active');
        let currentIndex = Array.from(SLIDES).indexOf(currentActive);

          // Calculer le nouvel index
        const newIndex = (currentIndex + direction + SLIDES.length) % SLIDES.length;  // S'assure de revenir au début ou à la fin

          // Retirer la classe 'active' de la slide actuelle
        currentActive.classList.remove('active');

               // Ajouter la classe 'active' à la nouvelle slide
        SLIDES[newIndex].classList.add('active');
    });
});

// Charger les commentaires depuis localStorage
let comments = JSON.parse(localStorage.getItem("comments")) || [];

const typeInput = document.getElementById("type");
const contentInput = document.getElementById("content");
const commentsList = document.getElementById("commentsList");
const sendBtn = document.getElementById("sendBtn");

// =======================
// AFFICHER LES COMMENTAIRES
// =======================
function displayComments() {
    commentsList.innerHTML = "";

    comments.forEach((comment, index) => {

        const div = document.createElement("div");
        div.classList.add("comment");

        // TYPE
        const spanType = document.createElement("span");
        spanType.textContent = comment.type.toUpperCase();

        // DATE
        const spanDate = document.createElement("span");
        spanDate.textContent = " - " + comment.date;

        // BR
        const br = document.createElement("br");

        // TEXTE
        const spanText = document.createElement("span");
        spanText.textContent = comment.text;

        // BOUTON SUPPRIMER
        const button = document.createElement("button");
        button.textContent = "Supprimer";
        button.classList.add("delete-btn");
        button.dataset.index = index;

        // ASSEMBLER
        div.append(spanType, spanDate, br, spanText, button);

        // AJOUTER AU CONTAINER
        commentsList.appendChild(div);
    });

    // Ajouter les events de suppression
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", deleteComment);
    });
}

// =======================
// ENVOYER UN COMMENTAIRE
// =======================
sendBtn.addEventListener("click", () => {
    const text = contentInput.value.trim();

    if (!text) {
        alert("Veuillez écrire quelque chose !");
        return;
    }

    const newComment = {
        type: typeInput.value,
        text: text,
        date: new Date().toLocaleString()
    };

    comments.push(newComment);

    // Sauvegarde locale
    localStorage.setItem("comments", JSON.stringify(comments));

    displayComments();

    contentInput.value = "";
    typeInput.value = "message";
});

// =======================
// SUPPRIMER UN COMMENTAIRE
// =======================
function deleteComment(e) {
    const index = e.target.dataset.index;
    comments.splice(index, 1);

    localStorage.setItem("comments", JSON.stringify(comments));

    displayComments();
}

// =======================
// AFFICHER AU CHARGEMENT
// =======================
displayComments();
