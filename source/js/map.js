'use strict';

function initMap() {
  const TABLET_WIDTH = 768;
  const MOBILE_PIN_SIZE = 41;
  const TABLET_PIN_SIZE = 56;
  const LOCATION = {lat: 59.938891, lng: 30.323037};

  const mapElement = document.querySelector(`.map`);
  mapElement.style.width = `100%`;

  const mapPinElement = mapElement.querySelector(`#pin`);
  mapPinElement.classList.add(`visually-hidden`);

  const map = new google.maps.Map(document.querySelector(`#map`), {
    zoom: 14,
    center: LOCATION,
    disableDefaultUI: true
  });

  const getPinSize = () => {
    if (window.matchMedia(`(min-width: ${TABLET_WIDTH}px)`).matches) {
      return TABLET_PIN_SIZE;
    }
    return MOBILE_PIN_SIZE;
  }

  const icon = {
    url: `img/map-marker.svg`,
    scaledSize: new google.maps.Size(getPinSize(), getPinSize()),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0)
  };

  const marker = new google.maps.Marker({
    position: LOCATION,
    map,
    icon
  });
}
