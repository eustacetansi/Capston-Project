const splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click', ()=>{
    splashScreen.getElementsByClassName.opacity = 0;
    setTimeout(()=>{
        splashScreen.classList.add('hidden')
    }, 400)
})