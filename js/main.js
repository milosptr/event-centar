(function() {
  let experienceActiveTab = 0
  const welcomeMsgAnimation = bodymovin.loadAnimation({
    container: document.getElementById('welcome'),
    rederer: 'svg',
    loop: false,
    autoplay: false,
    path: '../assets/homepageWelcome.json'
  })

  if(document.getElementById('loading-text')) {
    const options = {
      text: "...and when it's all said and done, if is not the days or weeks or months that we remember Its the moments...",
      fontSize: 30,
      duration:7500,
      //delay: 2100,
      delay: 1100,
      y:10
    }
    if(window.innerWidth <= 500) {
      options.fontSize = 20
      options.y = 60
      options.duration = 7000
    }
    new Vara("#loading-text","/fonts/font.json",[options], {
      strokeWidth: 0.7,
      textAlign:"center",
      delay: 2000,
    });
  }


  function init(){
    // new SmoothScroll(target,speed,smooth)
    new SmoothScroll(document,50,16)
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement
                || document.documentElement
                || document.body.parentNode
                || document.body)

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
                && document.documentElement
                ? document.documentElement
                : target

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault();

      var delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight))

      if (!moving) update()
    }

    function normalizeWheelDelta(e){
      if(e.detail){
        if(e.wheelDelta)
          return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
        else
          return -e.detail/3 // Firefox
      }else
        return e.wheelDelta/120 // IE,Safari,Chrome
    }

    function update() {
      moving = true

      var delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }

    var requestFrame = function() { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }

  if(document.body.id === 'contact'){
    var contactAddress = bodymovin.loadAnimation({
      container: document.getElementById('contactAddress'),
      rederer: 'svg',
      loop: false,
      autoplay: false,
      path: '../assets/contactAddress.json'
    })
    if(isFullyVisible(document.getElementById('contactAddress'))){
      setTimeout(()=> {
        contactAddress.play()
      },1500)
    }
  }

  //experience mobile menu

  if(document.body.id === 'experience') {
  let experienceSection = document.querySelector(".experiences-container");

  experienceSection.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("upper-experience-title")) {
      let hiddenInfo = target.nextElementSibling;
      if (hiddenInfo.classList.contains('hidden')) {
        hiddenInfo.classList.remove('hidden')
        target.classList.add('upper-experience-title--minus');
      }
      else {
        hiddenInfo.classList.add('hidden')
        target.classList.remove('upper-experience-title--minus');
      }
    }
})
}

    const categories = document.querySelectorAll('.inner-menu-item')
    if(categories && categories.length && screen.width >=  1024 ) {
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
  products.forEach((p, idx) => {
    p.style = ''
    p.classList.remove('hide')
    p.style.opacity = 1
    if(p.dataset.category !== category)
      p.classList.add('hide')
    else
      experienceActiveTab = idx
    })
  categories.forEach((c,idx) => {
    //c.classList.add(idx%2 === 0 ? 'btn-zoom-in-out' : 'btn-zoom-in-out')
    c.classList.remove('active')
    if(c.dataset.categoryName === category)
      c.classList.add('active')
  })
}

   //spaces page

   if (document.body.id === 'spaces') {
    let spacesSection = document.querySelector(".spaces-container");
    const rooms1 = [...document.querySelector('.spaces-container').children]
    rooms1[1].classList.add('coming-soon')
    rooms1[2].classList.add('coming-soon')
    rooms1[3].classList.add('coming-soon')

    spacesSection.addEventListener("click", function (event) {
      let target = event.target;
      if (target.classList.contains("upper-space-title")) {
        let hiddenInfo = target.nextElementSibling;
        if (hiddenInfo.classList.contains('hidden')) {
          hiddenInfo.classList.remove('hidden')
          target.classList.add('upper-space-title--minus');
        }
        else {
          hiddenInfo.classList.add('hidden')
          target.classList.remove('upper-space-title--minus');
        }
      }
  })
  }


   const categoriesSpaces = document.querySelectorAll('.inner-menu-item-spaces')
    if (categoriesSpaces && categoriesSpaces.length && screen.width >=  1024) {
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

    function filterRooms(category) {
      const rooms = [...document.querySelector('.spaces-container').children]
      rooms.forEach((p) => {
        p.style = ''
        p.classList.remove('hide')
        p.style.opacity = 1

        if (p.dataset.category !== category)
        p.classList.add('hide')

        if (p.dataset.category !== 'bromley-co-gallery')
        p.classList.add('coming-soon')


      })
      categoriesSpaces.forEach((c,idx) => {
        c.classList.remove('active')
        if(c.dataset.categoryName === category)
          c.classList.add('active')
      })
    }


//homepage team members mobile version slider
  if(document.querySelector('.our-team-members')){
    if(window.innerWidth < 1024){
      document.querySelector('.our-team-members').classList.add('swiper')
      document.querySelector('.our-team-members').classList.add('reveal-top')
      document.querySelector('.our-team-members-wrapper').classList.add('swiper-wrapper')
      document.querySelectorAll('.our-team-single-member').forEach(tm => tm.classList.add('swiper-slide'))

      new Swiper(".our-team-members", {
        speed: 600,
        centrared: true,
        slidesPerView: window.innerWidth < 640 ? 1.15 : 2,
        loop: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
    else{
      document.querySelectorAll('.our-team-single-member').forEach(tm => tm.classList.add('reveal-top-fast'))
    }
  }


  // Loading Screen Animation
  if(document.getElementById('loading-screen')) {
    let tl = gsap.timeline()
    tl.from("#loading-animated-text path", { duration: 2, delay: 1, fill: "#99948b", stagger: 0.2, drawSVG: 0 })

    document.getElementById('skip-loading').addEventListener('click', (e) => {
      clearTimeout(loadingScreenTimeout)
      document.getElementById('loading-screen').classList.add('finish')
      document.getElementById('loading-text').classList.add('finish')
      document.getElementById('homepage-first-img').classList.add('animate__animated')
      document.getElementById('homepage-first-img').classList.add('animate__fadeInUp')
      document.getElementById('homepage-first-img').classList.add('animate__slower')
      setTimeout(() => {
        document.getElementById('loading-screen').remove()
      }, 3000)
      setTimeout(() => {
        welcomeMsgAnimation.play()
      }, 1000)
      document.body.style.overflow = ''
    })
    let loadingScreenTimeout =  setTimeout(() => {
      if(document.querySelector('.finish') === null)
        document.getElementById('loading-screen').classList.add('finish')
        document.getElementById('loading-text').classList.add('finish')
        document.getElementById('homepage-first-img').classList.add('animate__animated')
        document.getElementById('homepage-first-img').classList.add('animate__fadeInUp')
        document.getElementById('homepage-first-img').classList.add('animate__slower')
        setTimeout(() => {
          document.getElementById('loading-screen').remove()
          welcomeMsgAnimation.play()
        }, 4000)
        setTimeout(() => {
          welcomeMsgAnimation.play()
        }, 1000)
        document.body.style.overflow = ''
    }, 10500);
  }

  if(location.href.split('/').at(-1) === "?a=hidden"){
    setTimeout(()=> {
      welcomeMsgAnimation.play()
    }, 1200)
  }

  const menuItems = document.querySelectorAll('.menu-item')
  menuItems.forEach((m, idx) => {
    const menuUrl = m.getAttribute('href')?.replaceAll('/', '')
    const url = location.pathname.replaceAll('/', '')
    m.classList.remove('menu-item--active')
    if(menuUrl === url)
      m.classList.add('menu-item--active')
    if(url.length === 0 & idx === 0)
      m.classList.add('menu-item--active')
  })

  var members = document.querySelectorAll('.team-member');

  members.forEach((item, index) => {
      (index % 2 == 0) ?item.classList.add('odd'):item.classList.add('even')
  });


  const navMain = document.querySelector('.menu');
  const navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', function() {
  navMain.classList.toggle('menu--opened')
  navToggle.classList.toggle('nav-toggle--closed');
  }
  );


  //for animated lines

  var animatedLines = document.querySelectorAll(".inbetween-line");
  var animatedLightLines = document.querySelectorAll(".inbetween-line-light");
  const experienceTitle = document.querySelectorAll('.experience-title')
  const experienceHeadline = document.querySelectorAll('.experience-headline')
  const experienceFirstText = document.querySelectorAll('.experience-first-text')
  const experienceSecondText = document.querySelectorAll('.experience-second-text')
  const experienceDownloadBtn = document.querySelectorAll('.experience-download-btn')

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

    if(experienceTitle.length && experienceFirstText && experienceSecondText && experienceDownloadBtn){
      if(window.innerWidth > 1024){
        experienceTitle[experienceActiveTab].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
        experienceFirstText[experienceActiveTab].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
        experienceSecondText[experienceActiveTab].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
        experienceDownloadBtn[experienceActiveTab].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
        experienceHeadline[experienceActiveTab].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
      }
      else{
        for(let exp = 0; exp < experienceTitle.length; exp++){
          experienceTitle[exp].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
          experienceFirstText[exp].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
          experienceSecondText[exp].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
          experienceDownloadBtn[exp].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
          experienceHeadline[exp].classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
        }
      }
    }
    
    if(document.getElementById('contactAddress') && isFullyVisible(document.getElementById('contactAddress'))){
      contactAddress.play()
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

  window.addEventListener('load', () => {
    setTimeout(() => {
      window.addEventListener('scroll', scrolling);
    }, 10)
  })
  window.addEventListener('DOMContentLoaded', showAnimatedLines);

//for desktop experience animation
  function experiencesScroll() {
    if (document.body.id === 'experience') {
      let experienceSection = document.querySelector(".experience-box");
      experienceSection.classList.add('experience-desktop-animation-class');
      const exElements = [...document.querySelector('.experience-box').children]
      exElements.forEach((c) => {
        c.classList.remove('animate__animated')
      })
    }
  }



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
  if(document.querySelector('.reveal-top-fast'))
    ScrollReveal().reveal('.reveal-top-fast', { delay: 200, distance: '50px', duration: 800, origin: 'bottom', easing: 'cubic-bezier(0.3,.62,1,1)' });
  if(document.querySelector('.reveal-top-delay'))
    ScrollReveal().reveal('.reveal-top-delay', { delay: 300, distance: '30px', duration: 700, origin: 'bottom', easing: 'cubic-bezier(0.3,.62,1,1)' });

  document.body.addEventListener('onload', init())
})()
