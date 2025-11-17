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

const BUTTONS =document.querySelectorAll('.btn');
const SLIDES = document.querySelectorAll('.slide');


BUTTONS.forEach((button) => {
    button.addEventListener('click', (e)=>{
        const CALC = e.target.id ==="next" ? 1 : -1 ;

        const SLIDE_ACTIVE = document.querySelectorAll('.active');
        
    })
})
