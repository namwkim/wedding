window.onload = function(){
  //initialize
  // console.log('screen.height', window.innerHeight);
  var tc = document.getElementsByClassName('teaser-container')[0];
  tc.style.opacity = 1.0;
  tc.style.height = window.innerHeight + 'px';

  // add animations
  var ti = document.getElementsByClassName('teaser-image')[0];
  ti.classList.add('animated', 'fadeIn');

  var list = document.getElementsByClassName('teaser-text');
  for (var i=0; i<list.length; i++){
      list[i].classList.add('animated', 'fadeInUp');
  }

  var heart = document.getElementById('heart');
  heart.classList.add('animated', 'infinite', 'bounce');


}

function showImage(image){
  console.log('show image', image);
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup').style.pointerEvents = 'auto';
  document.getElementById('popup').classList.remove('animated', 'fadeOut');
  document.getElementById('popup').classList.add('animated', 'fadeIn');
  // document.getElementById('popup-content').classList.add('animated', 'flipInX');
  document.getElementById('popup-image').src = image;
  document.body.style.overflow = 'hidden';
}

function closePopup(event){
  if (event.target===event.currentTarget){
    document.getElementById('popup').classList.remove('animated', 'fadeIn');
    document.getElementById('popup').classList.add('animated', 'fadeOut');
    document.getElementById('popup').style.pointerEvents = 'none';
    // document.getElementById('popup').style.display='none';
    // document.getElementById('popup-content').classList.remove('animated', 'flipInX');
    document.body.style.overflow = '';
  }
}
