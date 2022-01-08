var navList = document.getElementById("navList");
function showMenu() {
    navList.style.right = "0";
}
function hideMenu() {
    navList.style.right = "-200px";
}

/* show scroll up */

function scrollUp () {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY>=200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

//scroll reveal

const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    //reset:true
})

sr.reveal('.about-col',{delay:500})
sr.reveal('.skills-wrapper',{interval:100})
sr.reveal('.projects-col',{origin:'left'})
sr.reveal('.contact',{origin:'right'})
