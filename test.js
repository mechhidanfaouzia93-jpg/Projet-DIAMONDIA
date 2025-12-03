// ========================
// VARIABLES GLOBALES
// ========================
let currentQuestion = 0;
let scores = {};
let questions = [];
let pierres = [];

// ========================
// CHARGER LE JSON
// ========================
fetch("test.json")
    .then(response => response.json())
    .then(data => {
        questions = data.test.questions;
        pierres = data.test.pierres;
        console.log("JSON chargé !");
    })
    .catch(error => console.error("Erreur JSON :", error));


// ========================
// DÉMARRER LE TEST
// ========================
function startTest() {
    currentQuestion = 0;
    scores = {};

    showScreen('question-screen');
    displayQuestion();
}


// ========================
// AFFICHER UNE QUESTION
// ========================
function displayQuestion() {
    const question = questions[currentQuestion];

    // Titre + numéro
    document.getElementById('question-number').textContent =
        `Question ${currentQuestion + 1}/${questions.length}`;

    document.getElementById('question-text').textContent = question.question;

    // Barre de progression
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    // Options
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(option.type);

        // ---- ICON ----
        const iconDiv = document.createElement('div');
        iconDiv.className = 'option-icon';
        iconDiv.textContent = option.texte.split(' ')[0];

        // ---- TEXTE ----
        const textDiv = document.createElement('div');
        textDiv.className = 'option-text';
        textDiv.textContent = option.texte;

        // Assembler
        optionDiv.appendChild(iconDiv);
        optionDiv.appendChild(textDiv);

        container.appendChild(optionDiv);
    });
}


// ========================
// SÉLECTION D’UNE OPTION
// ========================
function selectOption(type) {
    if (scores[type]) scores[type]++;
    else scores[type] = 1;

    currentQuestion++;

    if (currentQuestion < questions.length) displayQuestion();
    else showResult();
}


// ========================
// AFFICHER LE RÉSULTAT
// ========================
function showResult() {
    // Trouver la pierre gagnante
    let maxScore = 0;
    let resultType = "diamant";

    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultType = type;
        }
    }

    const pierre = pierres[resultType];

    // ---- ICÔNE ----
    document.getElementById('result-icon').textContent = pierre.icon;

    // ---- NOM ----
    document.getElementById('result-pierre').textContent = pierre.nom;

    // ---- SOUS-TITRE ----
    document.getElementById('result-subtitle').textContent =
        `Vous êtes comme un(e) ${pierre.nom.toLowerCase()} !`;

    // ---- PROPRIÉTÉS ----
    const propContainer = document.getElementById('result-properties');
    propContainer.innerHTML = "";

    // Couleur
    const box1 = document.createElement('div');
    box1.className = "property-box";

    const label1 = document.createElement('div');
    label1.className = "property-label";
    label1.textContent = "Couleur";

    const value1 = document.createElement('div');
    value1.className = "property-value";
    value1.textContent = pierre.couleur;

    box1.appendChild(label1);
    box1.appendChild(value1);

    // Élément
    const box2 = document.createElement('div');
    box2.className = "property-box";

    const label2 = document.createElement('div');
    label2.className = "property-label";
    label2.textContent = "Élément";

    const value2 = document.createElement('div');
    value2.className = "property-value";
    value2.textContent = pierre.element;

    box2.appendChild(label2);
    box2.appendChild(value2);

    propContainer.appendChild(box1);
    propContainer.appendChild(box2);

    // ---- Texte personnalité + raison ----
    document.getElementById('result-personnalite').textContent = pierre.personnalite;
    document.getElementById('result-raison').textContent = pierre.raison;

    showScreen('result-screen');
}


// ========================
// RECOMMENCER
// ========================
function restartTest() {
    showScreen('start-screen');
}


// ========================
// CHANGEMENT D'ÉCRAN
// ========================
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    document.getElementById(screenId).classList.add('active');
}
