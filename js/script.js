const scrollPage = () => {
    const nav = document.querySelector('.navbar');
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            nav.classList.add('navbar_scroll');
        } else {
            nav.classList.remove('navbar_scroll');
        }
    }
};

AOS.init({
    duration: 1200
});
scrollPage();