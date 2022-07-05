function pic() {
  const bgm = ['https://github.com/RomanVinichenko/smidige/blob/master/app/images/top.jpg', 'https://github.com/RomanVinichenko/smidige/blob/master/app/images/top2.jpg'];

  $('.top').css({
    'background-image' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ')',
  });
}
pic();
