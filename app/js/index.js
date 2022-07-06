function pic() {
  const bgm = ['https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top.jpg', 'https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top2.jpg'];

  $('.top').css({
    'background-image' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ')',
  });
}
pic();

$(document).ready(function(){
  $('.studies__list').slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
});
});
