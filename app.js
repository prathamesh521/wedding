var menuButton = document.getElementById('toggle-menu');
var navbar = document.getElementById('navbar');
var fas = document.querySelectorAll('.fas');

menuButton.addEventListener('click', ()=>{
    navbar.classList.toggle('show');
    fas.forEach(element => {
        element.classList.toggle('hide');
    });
})


