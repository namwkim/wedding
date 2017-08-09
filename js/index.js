window.onload = function(){
  //initialize
  // console.log('screen.height', window.innerHeight);
  var tc = document.getElementsByClassName('teaser-container')[0];
  tc.style.opacity = 1.0;
  tc.style.height = window.innerHeight + 'px';

  var invitee = document.getElementById('invitee');
  invitee.innerHTML = gup('invitee');
  invitee.classList.add('animated', 'tada', 'infinite');
  // add animations
  var ti = document.getElementsByClassName('teaser-image')[0];
  ti.classList.add('animated', 'fadeIn');

  var list = document.getElementsByClassName('teaser-text');
  for (var i=0; i<list.length; i++){
      list[i].classList.add('animated', 'fadeInUp');
  }
  $('#image-detail').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   adaptiveHeight: true,
   asNavFor: '#image-list'
  });

  $('#image-list').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '#image-detail',
    centerMode: true,
    focusOnSelect: true

  });

}

function gup(name) {
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
		return "";
	else return decodeURIComponent(results[1]);
}

function showImage(image){
  document.getElementById('image-detail').src = image;
  // console.log('show image', image);
  // document.getElementById('popup').style.display = 'block';
  // document.getElementById('popup').style.pointerEvents = 'auto';
  document.getElementById('image-detail').classList.remove('animated', 'fadeIn');
  document.getElementById('image-detail').classList.add('animated', 'fadeIn');
  // // document.getElementById('popup-content').classList.add('animated', 'flipInX');
  // document.getElementById('popup-image').src = image;
  // document.body.style.overflow = 'hidden';
}
