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

//to show animation for lines which are seen after
// loading the page even before scrolling

function showAnimatedLines() {
  for (var k = 0; k < animatedLightLines.length; k++) {
    var animatedLightLine = animatedLightLines[k];

    if (isFullyVisible(animatedLightLine)) {
      animatedLightLine.classList.add("animated-light");
    }
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
