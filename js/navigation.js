let prevScrollPos = window.scrollY;

const {top: top_} = document.getElementsByTagName("header").item(0).getBoundingClientRect()
const {bottom: bottom_} = document.getElementsByTagName("header").item(0).getBoundingClientRect()
const menuButton = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        document.getElementsByTagName("nav").item(0).style.top = "0";
        document.getElementById("nav-sticky-name").style.display = "block";
    } else {
        document.getElementsByTagName("nav").item(0).style.top = "-11em";
        document.getElementById("nav-sticky-name").style.display = "none";
        if (navMenu.classList.contains('active')){
            navMenu.classList.remove('active');
        }
    }
    if (currentScrollPos >= top_ && window.scrollY <= bottom_) {
        document.getElementById("nav-sticky-name").style.display = "none";
    }
    prevScrollPos = currentScrollPos;
}

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
