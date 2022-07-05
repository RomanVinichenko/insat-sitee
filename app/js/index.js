function pic() {
  const bgm = ['blob/master/app/images/top.jpg', 'blob/master/app/images/top2.jpg'];

  $('.top').css({
    'background-image' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ')',
  });
}
pic();
