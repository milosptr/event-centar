// Loading Screen Animation
let tl = gsap.timeline()
tl.from("#loading-animated-text path", { duration: 2, delay: 1.8, fill: "#99948b", stagger: 0.2, drawSVG: 0 })

if(document.getElementById('loading-screen')) {
  document.getElementById('skip-loading').addEventListener('click', (e) => {
    document.getElementById('loading-screen').classList.add('finish')
    document.body.style.overflow = ''
  })
  setTimeout(() => {
    if(document.querySelector('.finish') === null)
      document.getElementById('loading-screen').classList.add('finish')
      document.body.style.overflow = ''
  }, 18500);
}

const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach((m) => {
  const menuUrl = m.getAttribute('href').replaceAll('/', '')
  const url = location.pathname.replaceAll('/', '')
  m.classList.remove('active')
  if(menuUrl === url)
    m.classList.add('active')
})

var members = document.querySelectorAll('.team-member');

members.forEach((item, index) => {
    (index % 2 == 0) ?item.classList.add('odd'):item.classList.add('even')
});

const navMain = document.querySelector('.menu');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function() {
navMain.classList.toggle('menu--opened')
navToggle.classList.toggle('nav-toggle--close');
}
);


//for animated lines

var animatedLines = document.querySelectorAll(".inbetween-line");
var animatedLightLines = document.querySelectorAll(".inbetween-line-light");

function scrolling() {
  for (var i = 0; i < animatedLines.length; i++) {
    var animatedLine = animatedLines[i];

    if (isFullyVisible(animatedLine)) {
      animatedLine.classList.add("animated-line");
    }
  }

  for (var k = 0; k < animatedLightLines.length; k++) {
    var animatedLightLine = animatedLightLines[k];

    if (isFullyVisible(animatedLightLine)) {
      animatedLightLine.classList.add("animated-light");
    }
  }
    }

//to show animation for light lines without scrolling

function showAnimatedLines() {
  for (var k = 0; k < animatedLightLines.length; k++) {
    var animatedLightLine = animatedLightLines[k];
      animatedLightLine.classList.add("animated-light");

  }
    }

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

window.addEventListener('scroll', scrolling);
window.addEventListener('DOMContentLoaded', showAnimatedLines);


//for page content scrolling

ScrollReveal().reveal('.reveal-left', { distance: '30px', duration: 700, origin: 'left', easing: 'cubic-bezier(0.3,.62,1,1)' });
ScrollReveal().reveal('.reveal-right', { distance: '30px', duration: 700, origin: 'right', easing: 'cubic-bezier(0.3,.62,1,1)' });
ScrollReveal().reveal('.reveal-top', { distance: '30px', duration: 700, origin: 'bottom', easing: 'cubic-bezier(0.3,.62,1,1)' });
ScrollReveal().reveal('.reveal-top-delay', { delay: 300, distance: '30px', duration: 700, origin: 'bottom', easing: 'cubic-bezier(0.3,.62,1,1)' });
