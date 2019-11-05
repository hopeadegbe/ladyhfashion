const nav = document.querySelector('.nav-wrapper');

window.addEventListener('scroll' , e =>{
    e.preventDefault();
    if(window.scrollY >= 200){
        nav.style.backgroundColor ='rgb(0,0,0)';
    }
    else{
        nav.style.backgroundColor ='transparent';
    }
})