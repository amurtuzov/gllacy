'use strict';
window.initMap = function() {
  var myLatLng = {lat: 59.938600, lng: 30.3244900};

        // Карта
  var map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 59.939600, lng: 30.3296900},
    scrollwheel: true,
    zoom: 16
  });

        // Маркер
  var image = 'img/marker.png';
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image,
    draggable: true,
    title: 'GllacyShop'
  });
}




        //Инпуты
var inputs = document.querySelectorAll('.change-input');
for (var i=0; i<inputs.length; i++) {
  inputs[i].addEventListener('change', function(e){
    e.preventDefault();
    if (this.value !== '') {
      this.classList.add('full');
    } else { 
        this.classList.remove('full');
      }
  });
}




        //Попап
var link = document.querySelector('.feedback-btn');
var popupContent = document.querySelector('.modal-content');
var popupOverlay = document.querySelector('.modal-overlay');
var close = popupContent.querySelector('.modal-content-close');
var popupForm = popupContent.querySelector('.modal-content-form');
var firstName = popupForm.querySelector('[name=firstname]');
var eMail = popupForm.querySelector('[name=mail]');

link.addEventListener('click', function(event) {
  event.preventDefault(); 
  popupContent.classList.add('modal-content-open');
  popupOverlay.classList.add('modal-overlay-open');
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popupContent.classList.remove('modal-content-open');
  popupOverlay.classList.remove('modal-overlay-open');
  popupContent.classList.remove('modal-error');
});

popupOverlay.addEventListener('click', function(event) {
  event.preventDefault();
  popupContent.classList.remove('modal-content-open');
  popupOverlay.classList.remove('modal-overlay-open');
  popupContent.classList.remove('modal-error');
});


window.addEventListener('keydown', function(event) { 
  if (event.keyCode === 27) { 
    popupContent.classList.remove('modal-content-open'); 
    popupOverlay.classList.remove('modal-overlay-open');
    popupContent.classList.remove('modal-error');
  } 
});

popupForm.addEventListener('submit', function(event) {
  if (!(firstName.value && eMail.value)) {
    event.preventDefault();
    popupContent.classList.remove('modal-error');
    void popupContent.offsetWidth;
    popupContent.classList.add('modal-error');
  }
});