function pic() {
  const bgm = ['https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top.jpg', 'https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top2.jpg'];

  $('.top').css({
    'background-image': 'url(' + bgm[Math.floor(Math.random() * bgm.length)] + ')',
  });
}

pic();

// $(document).ready(function () {
//   $('.articles-slick').slick({
//     arrows: false,
//     slidesToShow: 2,
//     infinite: true,
//     slidesToScroll: 1,
//     speed: 300,
//   });
// });

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
});

$(document).ready(function () {
  $('.scope__list').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 1,
  });
});

// INCLUDES HTML FILES

let includes = document.getElementsByTagName('include');
for (var i = 0; i < includes.length; i++) {
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

let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
  let scrollPos = window.scrollY;

  if (scrollPos > 10) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
  console.log(scrollPos)
});

$(function () {
  $('.link__service, .section__link, .article__element, .expert__button')
    .on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top: relY, left: relX})
    })
    .on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top: relY, left: relX})
    });
  $('[href=#]').click(function () {
    return false
  });
});

$(document).ready(function () {

  let scrollPos = window.scrollY;

  if (scrollPos > 10) {
    header.classList.add("header--active");

  } else {
    header.classList.remove("header--active");
  }
});
