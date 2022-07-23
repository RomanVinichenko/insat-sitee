function pic() {
  const bgm = ['https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top.jpg', 'https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top2.jpg'];

  $('.top').css({
    'background-image': 'url(' + bgm[Math.floor(Math.random() * bgm.length)] + ')',
  });
}

pic();

function picWhite() {
  const bgmWhite = ['https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top-white.jpg', 'https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top-white1.jpg'];

  $('.top--white').css({
    'background-image': 'url(' + bgmWhite[Math.floor(Math.random() * bgmWhite.length)] + ')',
  });
}

picWhite();

$(function () {
  $('.link__service, .section__link, .article__element, .expert__button, .footer__network')
    .on('mouseenter', function (e) {
      let parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top: relY, left: relX})
    })
    .on('mouseout', function (e) {
      let parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top: relY, left: relX})
    });
  $('[href="#"]').click(function () {
    return false
  });
});

// HEADER ACTIVE

let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
  let scrollPos = window.scrollY;

  if (header && scrollPos > 10) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
});

$(document).ready(function () {
  let scrollPos = window.scrollY;

  if (header && scrollPos > 10) {
    header.classList.add("header--active");

  } else {
    header.classList.remove("header--active");
  }
});

let swiperStudies = new Swiper('.swiper__studies', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  breakpoints: {
    1400: {
      loop: true,
      spaceBetween: 24,
    },
    850: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
    580: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
    }
  }
});

let swiperScope = new Swiper('.swiper__scope', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  breakpoints: {
    1400: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
    695: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
    }
  }
});

const burger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu-mobile');
if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('menu__burger--active');
    menuMobile.classList.toggle('menu-mobile--active');
  });
}

let elements = document.querySelectorAll('.job__wave');

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';

  let textContainer = document.createElement('div');
  textContainer.classList.add('block');

  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0' : letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});
const body = document.body
const topIndex = document.querySelector('.top')
const theme = document.querySelector('.theme-toggle');
if (theme) {

  theme.addEventListener('click', function () {
    setTimeout(function () {
      body.classList.toggle('light');
    }, 200);
    theme.classList.toggle('theme-toggle__active');
    topIndex.classList.toggle('top--white');
  });
}


function slidesItem(item, mainEl){
  gsap.registerPlugin(ScrollTrigger);
  const containerWidth = mainEl.getBoundingClientRect().width
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: item,
      scrub: 1,
      start: "top 95%",
      end: 'bottom 5%'
    }
  })

  tl.to(item,{
    width: `${containerWidth}px`,
    duration: 0.1,
    ease: 'none'
  })
  tl.to(item,{
    width: `${containerWidth/2}px`,
    duration: 0.1,
    ease: 'none'
  }, '+=0.1')

}



const ww = window.innerWidth
console.log(ww)
if(ww > 767) {
  const item_do_slider = document.querySelectorAll('.item_do_slider')
  if(item_do_slider.length > 0) {
    item_do_slider.forEach((el) => {
      const slide_items = el.querySelectorAll('.slide-item')
    slide_items.forEach((item) => {
      slidesItem(item, el)
    })


    })
  }
}