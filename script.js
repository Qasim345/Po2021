// pwa
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registeration => {
    console.log("SW Registered!");
    console.log(registeration);
  }).catch(error => {
    console.log("SW Registered filed");
    console.log(error);
  })
}

// loader
setTimeout(()=> {
  $(".loader-box").fadeOut(100);
}, 2500);
$("#btn").click(()=> {
  $("#btn,#sidenav,.back").toggleClass("act");
  $(".social").toggleClass("animated bounceInUp");
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
  if (window.scrollY > 230) {
    $(".top-btn").addClass("tb");
    $(".navbar").addClass("active");
  } else {
    $(".top-btn").removeClass("tb");
    $(".navbar").removeClass("active");
  }
});
// clicking top button
$(".top-btn").click(()=> {
  $("html,body").animate({
    scrollTop: 0
  }, 'slow')
});
// counterUp
$("#up1, #up2 ,#up3 ,#up4").counterUp({
  delay: 50,
  time: 4000
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
  origin: 'right',
})

ScrollReveal().reveal('form', {
  duration: 2000,
  origin: 'left',
})

ScrollReveal().reveal('.info', {
  duration: 2000,
  origin: 'bottom',
})

// portfolio
var swiper = new Swiper(".mySwiper", {
     effect: "coverflow",
     grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       autoplay: {
         delay: 1000,
         disableOnIntraction: false,
       },
    });