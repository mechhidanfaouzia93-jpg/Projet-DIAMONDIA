//theme sombre fuction

const THEME_SOMBRE =  document.getElementById('sombre');

THEME_SOMBRE.addEventListener('click' , ()=>{
    const SOMBRE = document.body ;

    SOMBRE.classList.toggle('sombre');
    if (THEME_SOMBRE.innerHTML==='🌚'){
        THEME_SOMBRE.innerHTML==='🌞' ;
    }
    else{
        THEME_SOMBRE.innerHTML==='🌚'
    }
});


//carousel function

// const BUTTONS =document.querySelectorAll('.btn');
// const SLIDES = document.querySelectorAll('.slide');


// BUTTONS.forEach((button) => {
//     button.addEventListener('click', (e)=>{
//         const CALC = e.target.id ==="next" ? 1 : -1 ;

//         const SLIDE_ACTIVE = document.querySelectorAll('.active');
        
//     })
// });



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

