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

let includes = document.getElementsByTagName('include');
for(var i=0; i<includes.length; i++){
  let include = includes[i];
  load_file(includes[i].attributes.src.value, function(text){
    include.insertAdjacentHTML('afterend', text);
    include.remove();
  });
}
function load_file(filename, callback) {
  fetch(filename).then(response => response.text()).then(text => callback(text));
}
