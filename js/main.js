function pic() {
  const bgm = ['https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top.jpg', 'https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top2.jpg'];

  $('.top').css({
    'background-image': 'url(' + bgm[Math.floor(Math.random() * bgm.length)] + ')',
  });
}

pic();

// INCLUDES HTML FILES

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

let includes = document.getElementsByTagName('include');
for (let i = 0; i < includes.length; i++) {
  let include = includes[i];
  load_file(includes[i].attributes.src.value, function (text) {
    include.insertAdjacentHTML('afterend', text);
    include.remove();
  });
}

function load_file(filename, callback) {
  fetch(filename).then(response => response.text()).then(text => callback(text));
}

// HEADER ACTIVE

// let header = document.querySelector(".header");
//
// window.addEventListener('scroll', function () {
//   let scrollPos = window.scrollY;
//
//   if (header && scrollPos > 10) {
//     header.classList.add("header--active");
//   } else {
//     header.classList.remove("header--active");
//   }
// });
//
// $(document).ready(function () {
//   let scrollPos = window.scrollY;
//
//   if (header && scrollPos > 10) {
//     header.classList.add("header--active");
//
//   } else {
//     header.classList.remove("header--active");
//   }
// });

let swiperStudies = new Swiper('.swiper__studies', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
});

let swiperScope = new Swiper('.swiper__scope', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
});
