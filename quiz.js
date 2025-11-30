
// Les questions du quiz
const questions = [
    {
        question: "Quelle est la pierre précieuse la plus dure ?",
        options: ["Le rubis", "Le diamant", "Le saphir", "L'émeraude"],
        correct: 1,
        explication: "Le diamant a une dureté de 10 sur l'échelle de Mohs, ce qui en fait la pierre naturelle la plus dure."
    },
    {
        question: "De quelle couleur est un rubis ?",
        options: ["Bleu", "Vert", "Rouge", "Jaune"],
        correct: 2,
        explication: "Le rubis est une variété rouge du corindon. Sa couleur provient de traces de chrome."
    },
    {
        question: "Quelle pierre est associée au mois de mai ?",
        options: ["L'améthyste", "L'émeraude", "Le diamant", "La topaze"],
        correct: 1,
        explication: "L'émeraude, de couleur verte intense, est la pierre de naissance du mois de mai."
    },
    {
        question: "Quel minéral donne sa couleur bleue au saphir ?",
        options: ["Le cuivre", "Le fer et le titane", "Le chrome", "Le manganèse"],
        correct: 1,
        explication: "Le saphir tire sa couleur bleue des traces de fer et de titane dans le corindon."
    },
    {
        question: "Quelle pierre change de couleur selon la lumière ?",
        options: ["L'alexandrite", "Le quartz", "La turquoise", "Le jade"],
        correct: 0,
        explication: "L'alexandrite est célèbre pour son changement de couleur : verte à la lumière du jour et rouge sous lumière artificielle."
    },
    {
        question: "Où trouve-t-on principalement les émeraudes de haute qualité ?",
        options: ["Australie", "Colombie", "Canada", "Russie"],
        correct: 1,
        explication: "La Colombie produit les émeraudes les plus prisées au monde, notamment celles de Muzo."
    },
    {
        question: "Quelle est la pierre d'anniversaire pour 10 ans de mariage ?",
        options: ["Le diamant", "Le saphir", "Le rubis", "L'émeraude"],
        correct: 0,
        explication: "Le diamant symbolise les 10 ans de mariage, représentant la solidité et l'éternité de l'union."
    },
    {
        question: "Quelle pierre était considérée comme sacrée par les Égyptiens ?",
        options: ["Le lapis-lazuli", "Le grenat", "L'opale", "La citrine"],
        correct: 0,
        explication: "Le lapis-lazuli était hautement valorisé en Égypte ancienne et utilisé dans les bijoux royaux."
    },
    {
        question: "Quelle est l'unité de mesure du poids des pierres précieuses ?",
        options: ["Le gramme", "Le carat", "L'once", "Le milligramme"],
        correct: 1,
        explication: "Le carat métrique (0,2 gramme) est l'unité standard pour mesurer le poids des pierres précieuses."
    },
    {
        question: "Quelle pierre est connue pour ses 'inclusions jardin' ?",
        options: ["Le diamant", "Le rubis", "L'émeraude", "Le saphir"],
        correct: 2,
        explication: "Les émeraudes contiennent souvent des inclusions appelées 'jardin' qui sont caractéristiques."
    }
];

// VARIABLES
let currentQuestion = 0;
let score = 0;
let playerName = "";
let answers = [];

// Démarrer le quiz
function startQuiz() {
    playerName = document.getElementById("player-name").value.trim() || "Joueur";
    currentQuestion = 0;
    score = 0;
    answers = [];

    showScreen("quiz-screen");
    showQuestion();
}

// Afficher une question
function showQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("current").textContent = currentQuestion + 1;
    document.getElementById("total").textContent = questions.length;
    document.getElementById("score").textContent = score;

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress").style.width = progress + "%";

    document.getElementById("question").textContent = q.question;

    // Construire les options SANS innerHTML
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    q.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.className = "option";
        div.onclick = () => selectAnswer(index);

        const letterDiv = document.createElement("div");
        letterDiv.className = "option-letter";
        letterDiv.textContent = letters[index];

        const textDiv = document.createElement("div");
        textDiv.textContent = option;

        div.appendChild(letterDiv);
        div.appendChild(textDiv);

        optionsDiv.appendChild(div);
    });

    const exp = document.getElementById("explanation");
    exp.classList.remove("show", "correct");
    document.getElementById("next-btn").classList.add("hidden");
}

// Sélectionner une réponse
function selectAnswer(index) {
    const q = questions[currentQuestion];
    const options = document.querySelectorAll(".option");

    // Désactiver tout
    options.forEach(opt => {
        opt.classList.add("disabled");
        opt.onclick = null;
    });

    const isCorrect = index === q.correct;

    if (isCorrect) {
        options[index].classList.add("correct");
        score++;
        document.getElementById("score").textContent = score;
    } else {
        options[index].classList.add("wrong");
        options[q.correct].classList.add("correct");
    }

    answers.push({
        question: q.question,
        userAnswer: q.options[index],
        correctAnswer: q.options[q.correct],
        isCorrect: isCorrect
    });

    const exp = document.getElementById("explanation");
    exp.classList.add("show");
    if (isCorrect) exp.classList.add("correct");

    document.getElementById("exp-title").textContent =
        isCorrect ? "✅ Bonne réponse !" : "❌ Mauvaise réponse";

    document.getElementById("exp-text").textContent = q.explication;

    document.getElementById("next-btn").classList.remove("hidden");
}

// Question suivante
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Afficher les résultats
function showResults() {
    const percentage = Math.round((score / questions.length) * 100);

    document.getElementById("final-score").textContent = `${score}/${questions.length}`;
    document.getElementById("percentage").textContent = `${percentage}%`;

    let icon = "🏆";
    let message = "";

    if (percentage === 100) {
        icon = "💎";
        message = "Parfait ! Vous êtes un expert en pierres précieuses !";
    } else if (percentage >= 80) {
        icon = "🌟";
        message = "Excellent ! Vous connaissez très bien les pierres précieuses !";
    } else if (percentage >= 60) {
        icon = "✨";
        message = "Bien joué ! Vous avez de bonnes connaissances !";
    } else if (percentage >= 40) {
        icon = "💫";
        message = "Pas mal ! Continuez à apprendre !";
    } else {
        icon = "🔮";
        message = "Continuez vos efforts !";
    }

    document.getElementById("result-icon").textContent = icon;
    document.getElementById("message").textContent = message;

    const recap = document.getElementById("recap");
    recap.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = "Récapitulatif :";
    title.style.marginBottom = "15px";
    recap.appendChild(title);

    answers.forEach((answer, index) => {
        const item = document.createElement("div");
        item.className = `recap-item ${answer.isCorrect ? "correct" : "wrong"}`;

        const qDiv = document.createElement("div");
        qDiv.className = "recap-question";
        qDiv.textContent = `${index + 1}. ${answer.question}`;

        const aDiv = document.createElement("div");
        aDiv.className = "recap-answer";
        aDiv.innerHTML = `Votre réponse : <strong>${answer.userAnswer}</strong>` +
            (!answer.isCorrect ? `<br>Bonne réponse : <strong>${answer.correctAnswer}</strong>` : "");

        item.appendChild(qDiv);
        item.appendChild(aDiv);

        recap.appendChild(item);
    });

    showScreen("result-screen");
}

// Recommencer
function restartQuiz() {
    showScreen("start-screen");
}

// Changer d’écran
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(scr => scr.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}
