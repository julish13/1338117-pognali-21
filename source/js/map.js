'use strict';

function initMap() {
  const mapElement = document.querySelector('.map');
  mapElement.style.width = `100%`;

  const mapPinElement = mapElement.querySelector('#pin');
  mapPinElement.classList.add('visually-hidden');
  const location = {lat: 59.938891, lng: 30.323037};

  const map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 14,
    center: location,
    disableDefaultUI: true
  });

  const image = 'img/map-marker.svg';

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: image
  });
}
