
// Initialized aos animation library
AOS.init();

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      if (st < 500) {
        $('nav').removeClass('nav-up').addClass('nav-down');
      }
    }
  }

  lastScrollTop = st;
}

//Display mobile menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {

     //Disable scroll
     if(document.body.style.overflow == "hidden"){
         document.body.style.overflow = "visible";
     }else{
      document.body.style.overflow = "hidden";
     }
    

      //Toggle nav
      nav.classList.toggle('nav-active');

      //Animate links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ``;
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
          }
      });

      //Burger animation
      burger.classList.toggle('toggle');


  });
}

navSlide();


//On keyup animated button
$("input").keyup(function () {
  if ($("#name").val().length > 0 && $("#email").val().length > 0) {
    $("button").css("width", "100%");
    $("button").css("font-size", "16px");
  }else{
    $("button").css("width", "0");
    $("button").css("font-size", "0");
  }
});

//Initialized slider

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 70,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
