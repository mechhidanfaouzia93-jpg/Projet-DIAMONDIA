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


// ===== 4. BASE DE DONNÉES DES PIERRES =====
const pierresData = {
    'ALEXANDRITE': {
        nom: 'Alexandrite',
        nomScientifique: 'Chrysoberyl',
        description: "L'alexandrite est une pierre rare et fascinante qui change de couleur selon la lumière. Elle passe du vert au jour au rouge sous lumière artificielle, un phénomène unique appelé 'effet alexandrite'.",
        origine: "Découverte en Russie dans les monts Oural en 1830, elle porte le nom du tsar Alexandre II. Aujourd'hui, on la trouve aussi au Brésil, au Sri Lanka et en Afrique de l'Est.",
        durete: '8.5',
        couleur: 'Vert/Rouge',
        famille: 'Chrysobéryl',
        vertus: "Pierre de chance et d'équilibre, l'alexandrite favorise la créativité et l'intuition. Elle aide à prendre des décisions importantes et renforce la confiance en soi."
    },
    'AMBER': {
        nom: 'Ambre',
        nomScientifique: 'Résine fossile',
        description: "L'ambre n'est pas un minéral mais une résine végétale fossilisée qui date de millions d'années. On y trouve parfois des insectes ou des débris végétaux piégés, témoins du passé.",
        origine: "Les plus grands gisements se trouvent sur les côtes de la mer Baltique (Pologne, Russie, Lituanie). L'ambre de la République Dominicaine est particulièrement prisé pour sa clarté.",
        durete: '2-2.5',
        couleur: 'Jaune à brun',
        famille: 'Organique',
        vertus: "Pierre de guérison ancestrale, l'ambre apaise les douleurs, calme l'anxiété et purifie les énergies négatives."
    },
    'AMETHYST': {
        nom: 'Améthyste',
        nomScientifique: 'Quartz violet',
        description: "L'améthyste est une variété de quartz de couleur violette, due à la présence de fer et d'irradiation naturelle. C'est l'une des pierres les plus populaires en joaillerie.",
        origine: "Principalement extraite au Brésil, en Uruguay, en Zambie et à Madagascar. Les améthystes les plus foncées proviennent généralement d'Uruguay.",
        durete: '7',
        couleur: 'Violet à pourpre',
        famille: 'Quartz',
        vertus: "Pierre de sagesse et d'humilité, l'améthyste favorise la méditation, combat les addictions et apporte le calme intérieur."
    },
    'AMETRINE': {
        nom: 'Amétrine',
        nomScientifique: 'Quartz bicolore',
        description: "L'amétrine combine améthyste violette et citrine jaune dans le même cristal.",
        origine: "Presque exclusivement extraite de la mine Anahi en Bolivie.",
        durete: '7',
        couleur: 'Violet et jaune',
        famille: 'Quartz',
        vertus: "Pierre d'harmonie qui équilibre les énergies et favorise la créativité."
    },
    'AQUAMARINE': {
        nom: 'Aigue-marine',
        nomScientifique: 'Béryl bleu',
        description: "L'aigue-marine tire son nom du latin 'aqua marina' (eau de mer) en raison de sa couleur bleu-vert évoquant l'océan.",
        origine: "Principalement extraite au Brésil, à Madagascar, au Pakistan et en Afrique.",
        durete: '7.5-8',
        couleur: 'Bleu clair à bleu-vert',
        famille: 'Béryl',
        vertus: "Pierre des marins et des voyageurs, apporte courage et clarté mentale."
    },
    'CITRINE': {
        nom: 'Citrine',
        nomScientifique: 'Quartz jaune',
        description: "La citrine naturelle est rare et se forme par la présence de fer dans le quartz.",
        origine: "Brésil, Madagascar, Russie, France (région du Dauphiné).",
        durete: '7',
        couleur: 'Jaune à brun doré',
        famille: 'Quartz',
        vertus: "Pierre de prospérité et d'abondance, attire la richesse et stimule la joie de vivre."
    },
    'DIAMOND': {
        nom: 'Diamant',
        nomScientifique: 'Carbone cristallisé',
        description: "Le diamant est le minéral naturel le plus dur connu. Formé de carbone pur cristallisé sous très haute pression.",
        origine: "Botswana, Russie, Canada, Afrique du Sud, Australie.",
        durete: '10',
        couleur: 'Incolore (ou diverses couleurs)',
        famille: 'Carbone',
        vertus: "Pierre d'éternité et de pureté, symbolise l'amour éternel et amplifie les énergies."
    },
    'EMERALD': {
        nom: 'Émeraude',
        nomScientifique: 'Béryl vert',
        description: "L'émeraude est un béryl coloré en vert par des traces de chrome et de vanadium.",
        origine: "La Colombie produit les émeraudes les plus prisées (Muzo, Chivor).",
        durete: '7.5-8',
        couleur: 'Vert intense',
        famille: 'Béryl',
        vertus: "Pierre de sagesse et de renaissance, favorise l'amour inconditionnel."
    },
    'FANCY COLOR DIAMOND': {
        nom: 'Diamant Fancy',
        nomScientifique: 'Carbone cristallisé coloré',
        description: "Les diamants de couleur fantaisie sont extrêmement rares.",
        origine: "Argyle en Australie (roses et rouges), Afrique du Sud, Brésil.",
        durete: '10',
        couleur: 'Toutes couleurs',
        famille: 'Carbone',
        vertus: "Combine les propriétés du diamant avec les énergies spécifiques de sa couleur."
    },
    'GARNET': {
        nom: 'Grenat',
        nomScientifique: 'Groupe des grenats',
        description: "Le grenat est une famille de minéraux disponible en plusieurs couleurs.",
        origine: "Inde, Sri Lanka, Tanzanie, Madagascar, États-Unis.",
        durete: '6.5-7.5',
        couleur: 'Rouge (principalement)',
        famille: 'Silicate',
        vertus: "Pierre d'énergie et de vitalité, stimule la passion et le courage."
    },
    'IOLITE': {
        nom: 'Iolite',
        nomScientifique: 'Cordiérite',
        description: "L'iolite présente un fort pléochroïsme : elle change de couleur selon l'angle de vue.",
        origine: "Inde, Sri Lanka, Myanmar, Madagascar, Brésil.",
        durete: '7-7.5',
        couleur: 'Bleu violet',
        famille: 'Silicate',
        vertus: "Pierre de vision et d'orientation, stimule l'imagination."
    },
    'MOONSTONE': {
        nom: 'Pierre de Lune',
        nomScientifique: 'Orthose',
        description: "La pierre de lune présente une adularescence caractéristique.",
        origine: "Sri Lanka, Inde, Myanmar, Madagascar, Tanzanie.",
        durete: '6-6.5',
        couleur: 'Blanc laiteux, reflets bleus',
        famille: 'Feldspath',
        vertus: "Pierre de féminité et d'intuition, équilibre les émotions."
    },
    'JADE': {
        nom: 'Jade',
        nomScientifique: 'Jadéite ou Néphrite',
        description: "Le terme 'jade' désigne deux minéraux distincts : la jadéite et la néphrite.",
        origine: "Myanmar (jadéite), Chine (néphrite), Nouvelle-Zélande.",
        durete: '6-7',
        couleur: 'Vert (principalement)',
        famille: 'Silicate',
        vertus: "Pierre de sagesse et de longévité, attire la chance et la prospérité."
    },
    'KUNZITE': {
        nom: 'Kunzite',
        nomScientifique: 'Spodumène rose',
        description: "La kunzite est une variété rose de spodumène découverte en 1902.",
        origine: "Afghanistan, Brésil, Madagascar, États-Unis (Californie).",
        durete: '6.5-7',
        couleur: 'Rose à lilas',
        famille: 'Spodumène',
        vertus: "Pierre du cœur divin, favorise l'amour inconditionnel."
    }
};

// ===== 5. SYSTÈME DE MODAL POUR LES PIERRES =====

// Variable pour stocker le modal (créé une seule fois)
let pierreModal = null;

// Fonction pour créer le modal
function creerModalPierre() {
    // Conteneur principal
    const modal = document.createElement('div');
    modal.id = 'pierre-modal';
    modal.className = 'modal';
    
    // Contenu du modal
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = '×';
    closeBtn.onclick = fermerModalPierre;
    
    const title = document.createElement('h3');
    title.id = 'modal-title';
    
    const subtitle = document.createElement('p');
    subtitle.id = 'modal-subtitle';
    
    modalHeader.appendChild(closeBtn);
    modalHeader.appendChild(title);
    modalHeader.appendChild(subtitle);
    
    // Body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    
    // Section Description
    const descSection = document.createElement('div');
    descSection.className = 'info-section';
    descSection.innerHTML = `
        <h4><i class="fas fa-book"></i> Description</h4>
        <p id="modal-description"></p>
    `;
    
    // Section Origine
    const origineSection = document.createElement('div');
    origineSection.className = 'info-section';
    origineSection.innerHTML = `
        <h4><i class="fas fa-map-marker-alt"></i> Origine</h4>
        <p id="modal-origine"></p>
    `;
    
    // Section Propriétés
    const propsSection = document.createElement('div');
    propsSection.className = 'info-section';
    propsSection.innerHTML = `
        <h4><i class="fas fa-gem"></i> Propriétés</h4>
        <div class="properties" id="modal-properties"></div>
    `;
    
    // Section Vertus
    const vertusSection = document.createElement('div');
    vertusSection.className = 'info-section';
    vertusSection.innerHTML = `
        <h4><i class="fas fa-heart"></i> Vertus et Significations</h4>
        <p id="modal-vertus"></p>
    `;
    
    modalBody.appendChild(descSection);
    modalBody.appendChild(origineSection);
    modalBody.appendChild(propsSection);
    modalBody.appendChild(vertusSection);
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    
    // Fermer en cliquant à l'extérieur
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            fermerModalPierre();
        }
    });
    
    return modal;
}

// Fonction pour ouvrir le modal
function ouvrirModalPierre(pierreName) {
    const pierre = pierresData[pierreName];
    
    if (!pierre) {
        console.error('Pierre non trouvée:', pierreName);
        return;
    }
    
    // Créer le modal s'il n'existe pas
    if (!pierreModal) {
        pierreModal = creerModalPierre();
        document.body.appendChild(pierreModal);
    }
    
    // Remplir le contenu
    document.getElementById('modal-title').textContent = pierre.nom;
    document.getElementById('modal-subtitle').textContent = pierre.nomScientifique;
    document.getElementById('modal-description').textContent = pierre.description;
    document.getElementById('modal-origine').textContent = pierre.origine;
    document.getElementById('modal-vertus').textContent = pierre.vertus;
    
    // Propriétés
    document.getElementById('modal-properties').innerHTML = `
        <div class="property">
            <div class="property-label">Dureté</div>
            <div class="property-value">${pierre.durete}</div>
        </div>
        <div class="property">
            <div class="property-label">Couleur</div>
            <div class="property-value">${pierre.couleur}</div>
        </div>
        <div class="property">
            <div class="property-label">Famille</div>
            <div class="property-value">${pierre.famille}</div>
        </div>
    `;
    
    // Afficher le modal
    pierreModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer le modal
function fermerModalPierre() {
    if (pierreModal) {
        pierreModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===== 6. AJOUTER LES ÉVÉNEMENTS AUX PIERRES =====
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner toutes les pierres
    const pierres = document.querySelectorAll('.info-pierre');
    
    pierres.forEach(pierre => {
        pierre.addEventListener('click', function() {
            const pierreName = this.querySelector('h6').textContent.trim();
            ouvrirModalPierre(pierreName);
        });
    });
    
    // Fermer le modal avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fermerModalPierre();
        }
    });
});

// ===== 7. SYSTÈME DE COMMENTAIRES (si besoin) =====
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
const sendBtn = document.getElementById("sendBtn");
const commentsList = document.getElementById("commentsList");

// Affiche tous les commentaires
function displayComments() {
    commentsList.innerHTML = "";

    comments.forEach((comment, index) => {
        const div = document.createElement("div");
        div.classList.add("comment");

        div.innerHTML = `
            <span>${comment.type.toUpperCase()}</span> - ${comment.date}<br>
            ${comment.text}
            <button class="delete-btn" data-index="${index}">Supprimer</button>
        `;

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








     
