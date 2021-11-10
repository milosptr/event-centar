(function() {
  //for inner menu on experinces page
    const categories = document.querySelectorAll('.inner-menu-item')
    if(categories && categories.length) {
      categories[0].classList.add('active')
      filterProducts(categories[0].dataset.categoryName)

      categories.forEach((c) => {
        c.addEventListener('click', (e) => {
          c.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
          filterProducts(e.target.dataset.categoryName)
        })
      })
    }


 function filterProducts(category) {
  const products = [...document.querySelector('.experiences-container').children]
  products.forEach((p) => {
    p.style = ''
    p.classList.remove('hide')
    p.style.opacity = 1
    if(p.dataset.category !== category)
    p.classList.add('hide')
  })
  categories.forEach((c,idx) => {
    c.classList.add(idx%2 === 0 ? 'btn-zoom-in-out' : 'btn-zoom-in-out')
    c.classList.remove('active')
    if(c.dataset.categoryName === category)
      c.classList.add('active')
  })
}

   //inner-menu-item-spaces

   const categoriesSpaces = document.querySelectorAll('.inner-menu-item-spaces')
    if(categoriesSpaces && categoriesSpaces.length) {
      categoriesSpaces[0].classList.add('active')
      filterRooms(categoriesSpaces[0].dataset.categoryName)

      categoriesSpaces.forEach((c) => {
        c.addEventListener('click', (e) => {
          c.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
        filterRooms(e.target.dataset.categoryName)
        })
      })
    }

    function filterRooms(room) {
      const rooms = [...document.querySelector('.spaces-container').children]
      console.log(rooms.length)
      rooms.forEach((p) => {
        console.log('p.dataset.room', p.dataset.room)
        p.style = ''
        p.classList.remove('hide')
        p.style.opacity = 1
        if(p.dataset.room !== room)
        p.classList.add('hide')
      })
      rooms.forEach((c,idx) => {
        console.log('c.dataset.categoryName',c.dataset.categoryName)
        console.log('room', room)
        c.classList.add(idx%2 === 0 ? 'btn-zoom-in-out' : 'btn-zoom-in-out')
        c.classList.remove('active')
        if(c.dataset.categoryName === room)
          c.classList.add('active')
      })
    }



// Loading Screen Animation
  if(document.getElementById('loading-screen')) {
    let tl = gsap.timeline()
    tl.from("#loading-animated-text path", { duration: 2, delay: 1.8, fill: "#99948b", stagger: 0.2, drawSVG: 0 })

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
    const menuUrl = m.getAttribute('href')?.replaceAll('/', '')
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
  let slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    delay: 275,
    duration: 2000,
    easing: 'cubic-bezier(0.25,1.05,1,1)',
  }

  if(document.querySelector('.reveal'))
    ScrollReveal().reveal('.reveal', { distance: '100px', duration: 700, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  if(document.querySelector('.reveal-left'))
    ScrollReveal().reveal('.reveal-left', { distance: '30px', duration: 700, origin: 'left', easing: 'cubic-bezier(0.3,.62,1,1)' });
  if(document.querySelector('.reveal-right'))
    ScrollReveal().reveal('.reveal-right', { distance: '30px', duration: 700, origin: 'right', easing: 'cubic-bezier(0.3,.62,1,1)' });
  if(document.querySelector('.reveal-top'))
    ScrollReveal().reveal('.reveal-top', { delay: 300, distance: '30px', duration: 1000, origin: 'bottom', easing: 'cubic-bezier(0.3,.62,1,1)' });
  if(document.querySelector('.reveal-top-delay'))
    ScrollReveal().reveal('.reveal-top-delay', { delay: 300, distance: '30px', duration: 700, origin: 'bottom', easing: 'cubic-bezier(0.3,.62,1,1)' });

})()
