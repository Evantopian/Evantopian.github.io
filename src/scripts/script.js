// hamburger 
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

// rem to px
function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    navLinks.classList.remove("active");
}));


// transitioning
rem = convertRemToPixels(5);
const colorNav = document.querySelector('.navbar');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= rem || document.documentElement.scrollTop >= rem) {
        colorNav.classList.add("nav-scrolled");
        colorNav.classList.remove("nav-default");

        navLinks.classList.add("nav-links-scrolled");
    } else {
        colorNav.classList.add("nav-default");
        colorNav.classList.remove("nav-scrolled");
        navLinks.classList.remove("nav-links-scrolled");
    }
};


// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
});

window.scrollBy(0, 100);

