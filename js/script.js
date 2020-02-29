// Components initialization
const nav = document.querySelector('.navbar');
const nav_links = document.querySelector('.navbar_nav-links');
const burger = document.querySelector('.navbar_burger');
const dot = document.querySelector('.navbar_bar_dot');

const configaos = {
    duration: 1200
}
const configglide = {
    type: 'carousel'
}

// Scroll method
const scrollPage = () => {
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            nav.classList.add('navbar_scroll');
            nav_links.classList.add('navbar_nav-links_scroll');
        } else {
            nav.classList.remove('navbar_scroll');
            nav_links.classList.remove('navbar_nav-links_scroll');
        }
    }
};

// Burger method
const burgerClick = () => {
    burger.addEventListener('click', () => {
        nav_links.classList.toggle('navbar_nav-links_click');
        burger.classList.toggle('navbar_burger_click');
    });
};

// Dot method
const dotClick = () => {
    dot.addEventListener('click', () => {
        nav_links.classList.toggle('navbar_nav-links_click');
        dot.classList.toggle('navbar_bar_dot_click');
    });
};

AOS.init(configaos);
scrollPage();
burgerClick();
dotClick();