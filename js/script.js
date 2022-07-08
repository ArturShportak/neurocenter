
// function sctrollToPathology() {

//     const topOfElement = document.getElementById('pathology').offsetTop - document.getElementById('nav').offsetHeight - 45;
//     window.scroll({ top: topOfElement, behavior: "smooth" });
// }


// function sctrollToInfo() {

//     const topOfElement = document.getElementById('info').offsetTop - document.getElementById('nav').offsetHeight - 25;
//     window.scroll({ top: topOfElement, behavior: "smooth" });


// }


// function sctrollToTop() {

//     document.querySelector('.marquee').scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     })
// }

// window.addEventListener('scroll', function (e) {

//     if (document.getElementById('h-title').getBoundingClientRect().top - document.getElementById('h-title').offsetHeight <= 0) {
//         document.getElementById('nav').classList.add('nav__bg');
//     } else document.getElementById('nav').classList.remove('nav__bg');

//     if (window.scrollY = 0){
//         console.log('f')  
//     }

// })

// function hideBlock() {
//   document.getElementById('sliderProtr').classList.toggle('v-hide');
//   document.getElementById('subtitle-ico-prot').classList.toggle('pathology__subtitle-ico-activ')
//   const topOfElement = document.querySelector('.pathology__subtitle').offsetTop - document.getElementById('nav').offsetHeight - 15;
//   window.scroll({ top: topOfElement, behavior: "smooth" });
// }
// function hideBlock1() {
//     document.getElementById('sliderProtr1').classList.toggle('v-hide');

//     const topOfElement = document.getElementById('subtitle-et').offsetTop - document.getElementById('nav').offsetHeight - 15;
//     window.scroll({ top: topOfElement, behavior: "smooth" });
// }



const blockAbout = document.getElementById('about');
const aboutLink =  document.getElementById('about-link');
const aboutOpnBtn =  document.getElementById('about-opening-btn');

aboutLink.addEventListener("click", function hideBlock(e) {
    e.preventDefault()
    blockAbout.classList.toggle('v-hide');
    const topOfElement = document.getElementById('about').offsetTop  - aboutOpnBtn.offsetHeight - 15;  
    window.scroll({ top: topOfElement, behavior: "smooth" });
})

aboutOpnBtn.addEventListener("click", function hideBlock(e) {
    e.preventDefault()
    blockAbout.classList.toggle('v-hide');
    const topOfElement = document.getElementById('about').offsetTop - aboutOpnBtn.offsetHeight - 15;  
    window.scroll({ top: topOfElement, behavior: "smooth" });
})