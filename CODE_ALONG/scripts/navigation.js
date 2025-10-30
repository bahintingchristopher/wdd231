
// store the selected elements that wer are going to use
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// toggle the show class OFF and ON
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
    
})
