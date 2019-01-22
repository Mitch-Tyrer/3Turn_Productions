var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

let navBar = document.getElementById("navbar");
let section = document.querySelectorAll(".section");

const addNavClass = () => {
    navBar.classList.add("fixed-top");
    
}

const removeNavClass = () => {
    navBar.classList.remove("fixed-top");
    
}



window.addEventListener('scroll', function () {
    let scrollPos = window.pageYOffset; 
    if (scrollPos > 700){
        addNavClass();
        
    } else {
        removeNavClass();
        
    }
});