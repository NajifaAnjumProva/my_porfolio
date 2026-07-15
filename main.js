const menuBtn=document.querySelector("#menu-btn");
const navbar=document.querySelector("#navbar");
const navLinks=document.querySelectorAll("nav a");

menuBtn.onclick=()=>{
    navbar.classList.toggle("active");
};

navLinks.forEach(link=>{
    link.onclick=()=>{
        navbar.classList.remove("active");
    };
});

var typed=new Typed(".typing",{
    strings:[
        "Computer Science Student",
        "Web Developer",
        "Programmer",
        "Problem Solver"
    ],
    typeSpeed:100,
    backSpeed:60,
    backDelay:1000,
    loop:true
});

let sections=document.querySelectorAll("section");
window.onscroll=()=>{
    let top=window.scrollY;
    sections.forEach(sec=>{
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id");

        if(top>=offset && top<offset+height){
            navLinks.forEach(link=>{
                link.classList.remove("active");
            });
            document.querySelector('nav a[href*='+id+']').classList.add("active");
        }
    });
};