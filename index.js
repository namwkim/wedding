window.onload = function(){
  //initialize
  // console.log('screen.height', window.innerHeight);
  var tc = document.getElementsByClassName('teaser-container')[0];
  tc.style.height = window.innerHeight + 'px';
}



new Vue({
  el: '#image-list',
  data: {
    images:[
      'img/photo1.jpeg',
      'img/photo2.jpeg',
      'img/photo3.jpeg',
      'img/photo4.png',
      'img/photo5.jpeg',
      'img/photo6.jpeg',
      'img/photo7.jpeg',
      'img/photo5.jpeg',
      'img/photo5.jpeg'
    ]
  },
  methods:{
    showImage:function(image){
      document.getElementById('popup').style.display = 'block';
      document.getElementById('popup-content').src = image;
      document.body.style.overflow = 'hidden';
    }
  }
})

new Vue({
  el:'#popup',
  methods:{
    close: function(event){
      if (event.target===event.currentTarget){
        document.getElementById('popup').style.display='none';
        document.body.style.overflow = '';
      }

    }
  }
})
