//theme sombre fuction

const THEME_SOMBRE = document.getElementById('sombre');

THEME_SOMBRE.addEventListener('click', () => {
    const SOMBRE = document.body;

    SOMBRE.classList.toggle('sombre');
    if (THEME_SOMBRE.innerHTML === '🌚') {
        THEME_SOMBRE.innerHTML === '🌞';
    }
    else {
        THEME_SOMBRE.innerHTML === '🌚'
    }
});

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

        //         // Trouver la slide active
        const currentActive = document.querySelector('.slide.active');
        let currentIndex = Array.from(SLIDES).indexOf(currentActive);

        //         // Calculer le nouvel index
        const newIndex = (currentIndex + direction + SLIDES.length) % SLIDES.length;  // S'assure de revenir au début ou à la fin

        //         // Retirer la classe 'active' de la slide actuelle
        currentActive.classList.remove('active');

        //         // Ajouter la classe 'active' à la nouvelle slide
        SLIDES[newIndex].classList.add('active');
    });
});


// ===== SYSTÈME DE COMMENTAIRES (si besoin) =====
const sendBtn = document.getElementById('sendBtn');

if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const type = document.getElementById('type').value;
        const content = document.getElementById('content').value.trim();
        
        if (!content) {
            alert('Veuillez entrer un commentaire !');
            return;
        }
        
        // Créer le commentaire
        const commentsList = document.getElementById('commentsList');
        
        if (commentsList) {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-item';
            commentDiv.innerHTML = `
                <strong>${type}</strong>
                <p>${content}</p>
                <small>${new Date().toLocaleString('fr-FR')}</small>
            `;
            
            commentsList.appendChild(commentDiv);
            
            // Réinitialiser le formulaire
            document.getElementById('content').value = '';
            
            alert('Commentaire envoyé avec succès !');
        }
    });
}


// Charger les commentaires ou créer une liste vide
let comments = JSON.parse(localStorage.getItem("comments")) || [];

const typeInput = document.getElementById("type");
const contentInput = document.getElementById("content");
const commentsList = document.getElementById("commentsList");

// Affiche tous les commentaires
function displayComments() {
    commentsList.innerHTML = "";

    comments.forEach((comment, index) => {
        const div = document.createElement("div");
        div.classList.add("comment");

    //     const span = document.createElement('span');
    //     const button= document.createElement('button');
    //     span.textContent = comment.type.toUpperCase() + "-" +comment.date;
    //     button.textContent = "supprimer";
    //     button.setAttribute('data-index',index);

    //     const span = document.createElement('span');
    //     const button= document.createElement('button');
    //     span.textContent = comment.type.toUpperCase() + "-" +comment.date;
    //     button.textContent = "supprimer";
    //     button.setAttribute('data-index',index);
    //     button.classList.add('delete-btn');

    //    div.appendChild(span,button)
        

    //     div.innerHTML = `
    //         <span>${comment.type.toUpperCase()}</span> - ${comment.date}<br>
    //         ${comment.text}
    //         <button class="delete-btn" data-index="${index}">Supprimer</button>
    //     `;

        commentsList.appendChild(div);
    });

    // Ajouter l'événement de suppression aux boutons
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', deleteComment);
    });
}

// Fonction pour envoyer le commentaire
sendBtn.onclick = () => {
    const text = contentInput.value.trim();

    if (text === "") {
        alert("Veuillez écrire quelque chose !");
        return;
    }

    const newComment = {
        type: typeInput.value,
        text: text,
        date: new Date().toLocaleString()  // On récupère la date et l'heure locales
    };

    // Ajout dans la liste
    comments.push(newComment);

    // Sauvegarde JSON locale dans localStorage
    localStorage.setItem("comments", JSON.stringify(comments));

    // Réaffichage des commentaires
    displayComments();

    // On vide les champs du formulaire
    contentInput.value = "";
    typeInput.value = "message";  // Option par défaut
};

// Fonction pour supprimer un commentaire
function deleteComment(event) {
    const index = event.target.dataset.index;  // On récupère l'index du commentaire à supprimer

    // Supprimer le commentaire à l'index donné
    comments.splice(index, 1);

    // Sauvegarder la liste mise à jour dans localStorage
    localStorage.setItem("comments", JSON.stringify(comments));

    // Réafficher la liste des commentaires après la suppression
    displayComments();
}

// Affiche les commentaires au chargement de la page
displayComments();








     
