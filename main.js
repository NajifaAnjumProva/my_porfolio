const typed = new Typed(".text", {
    strings: [
        "Frontend Developer",
        "Web Designer",
        "UI/UX Designer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.onclick = function () {
    navbar.classList.toggle("active");
};