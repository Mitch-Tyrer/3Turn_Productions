let navBar = document.getElementById("navbar");
let body = document.getElementById('first-section')

const addClass = () => {
    navBar.classList.add("fixed-top");
    body.classList.add("navbar-fixed");
}

const removeClass = () => {
    navBar.classList.remove("fixed-top");
    body.classList.remove("navbar-fixed");
}

window.addEventListener('scroll', function () {
    let scrollPos = window.pageYOffset; 
    if (scrollPos > 700){
        addClass();
    } else {
        removeClass();
    }
});