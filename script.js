// loader
setTimeout(()=> {
  $(".loader-box").fadeOut(100);
}, 2500);
$("#btn").click(()=> {
  $("#btn,#sidenav,.back").toggleClass("act");
});
document.onclick = ((e)=> {
  if (e.target.id !== 'btn' && e.target.id !== 'sidenav') {
    $("#btn,#sidenav,.back").removeClass("act");
  }
})
// nav button
/*$(".navBtn").click(()=> {
  $(".navBtn").toggleClass("act");
  $(".sidebar").toggleClass("active");
  $(".sidebar ul li a").toggleClass("animated fadeInUp");
  $(".sidebar h3, .social").toggleClass("animated bounceInUp");
});
// click outside of navbar and button
document.onclick = ((e)=> {
  if (e.target.id !== 'btn' && e.target.id !== 'nav') {
    $(".navBtn").removeClass("act");
    $(".sidebar").removeClass("active");
  }
})*/

// typed js plugin
var typed = new Typed('#text', {
  strings: ['Youtuber',
    'Qasim Sarwari',
    'Web Designer',
    'Web Developer',
    'Freelancer'],
  typeSpeed: 40,
  backSpeed: 50,
  loop: true
})
// showing back to top button
$(window).on('scroll', ()=> {
  if (window.scrollY > 250) {
    $(".top-btn").addClass("tb");
  } else {
    $(".top-btn").removeClass("tb")
  }
});
// clicking top button
$(".top-btn").click(()=> {
  $("html,body").animate({
    scrollTop: 0
  }, 'slow')
});
// counterUp
$("#up1,#up2,#up3,#up4").counterUp({
  delay: 80,
  time: 5000
})
//ScrollReveal animation
const sr = ScrollReveal({
  distance: '100px'
})
ScrollReveal().reveal('.card', {
  duration: 2000,
  origin: 'bottom',
});
ScrollReveal().reveal('.skills', {
  duration: 2000,
  origin: 'bottom',
})
ScrollReveal().reveal('.box', {
  duration: 2000,
  origin: 'bottom',
})
ScrollReveal().reveal('form', {
  duration: 2000,
  origin: 'bottom',
})
ScrollReveal().reveal('.info', {
  duration: 2000,
  origin: 'bottom',
})