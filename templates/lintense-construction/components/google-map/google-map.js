/**
 * @desc Check the element has been scrolled into the view
 * @param {object} elem - jQuery object
 * @return {boolean}
 */
function isScrolledIntoView(elem) {
  if (window.xMode) return true;
  return elem.offset().top + elem.outerHeight() >= $(window).scrollTop() && elem.offset().top <= $(window).scrollTop() + $(window).height();
}

/**
 * @desc Calls a function when element has been scrolled into the view
 * @param {object} element - object
 * @param {function} func - init function
 */
function lazyInit(element, func) {
  let scrollHandler = function () {
    if (!element.classList.contains('lazy-loaded') && (isScrolledIntoView($(element)))) {
      func.call(element, element);
      element.classList.add('lazy-loaded');
    }
  };

  scrollHandler();
  $(window).on('scroll', scrollHandler);
}

/**
 * @desc Google map function for getting latitude and longitude
 */
function getLatLngObject(str, marker, map, callback) {
  let coordinates = {};
  try {
    coordinates = JSON.parse(str);
    callback(new google.maps.LatLng(
      coordinates.lat,
      coordinates.lng
    ), marker, map)
  } catch (e) {
    map.geocoder.geocode({'address': str}, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();

        callback(new google.maps.LatLng(
          parseFloat(latitude),
          parseFloat(longitude)
        ), marker, map)
      }
    })
  }
}

/**
 * @desc Initialize Google maps
 */
function initMaps(node) {
  let key;
  if (node.hasAttribute("data-key")) {
    key = node.getAttribute("data-key");
  }

  $.getScript('//maps.google.com/maps/api/js?' + (key ? 'key=' + key + '&' : '') + 'libraries=geometry,places&v=quarterly', function () {
    let geocoder = new google.maps.Geocoder;
    let zoom = parseInt(node.getAttribute('data-zoom'), 10) || 11;
    let styles = node.hasAttribute('data-styles') ? JSON.parse(node.getAttribute("data-styles")) : [];
    let center = node.getAttribute('data-center') || 'New York';

    // Initialize map
    let map = new google.maps.Map(node.querySelector(".google-map"), {
      zoom:        zoom,
      styles:      styles,
      scrollwheel: false,
      center:      {
        lat: 0,
        lng: 0
      }
    });

    // Add map object to map node
    node.map = map;
    node.geocoder = geocoder;
    node.keySupported = true;
    node.google = google;

    // Get Center coordinates from attribute
    getLatLngObject(center, null, node, function (location, markerElement, mapElement) {
      mapElement.map.setCenter(location);
    });

    // Add markers from google-map-markers array
    let markerItems = node.querySelectorAll(".google-map-markers li");

    if (markerItems.length) {
      let markers = [];
      for (let j = 0; j < markerItems.length; j++) {
        let markerElement = markerItems[j];
        getLatLngObject(markerElement.getAttribute("data-location"), markerElement, node, function (location, markerElement, mapElement) {
          let icon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
          let activeIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active");
          let info = markerElement.getAttribute("data-description") || "";
          let infoWindow = new google.maps.InfoWindow({
            content: info
          });
          markerElement.infoWindow = infoWindow;
          let markerData = {
            position: location,
            map:      mapElement.map
          }
          if (icon) {
            markerData.icon = icon;
          }
          let marker = new google.maps.Marker(markerData);
          markerElement.gmarker = marker;
          markers.push({
            markerElement: markerElement,
            infoWindow:    infoWindow
          });
          marker.isActive = false;
          // Handle infoWindow close click
          google.maps.event.addListener(infoWindow, 'closeclick', (function (markerElement, mapElement) {
            let markerIcon = null;
            markerElement.gmarker.isActive = false;
            markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
            markerElement.gmarker.setIcon(markerIcon);
          }).bind(this, markerElement, mapElement));


          // Set marker active on Click and open infoWindow
          google.maps.event.addListener(marker, 'click', (function (markerElement, mapElement) {
            let markerIcon;
            if (markerElement.infoWindow.getContent().length === 0) return;
            let gMarker, currentMarker = markerElement.gmarker, currentInfoWindow;
            for (let k = 0; k < markers.length; k++) {
              if (markers[k].markerElement === markerElement) {
                currentInfoWindow = markers[k].infoWindow;
              }
              gMarker = markers[k].markerElement.gmarker;
              if (gMarker.isActive && markers[k].markerElement !== markerElement) {
                gMarker.isActive = false;
                markerIcon = markers[k].markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")
                gMarker.setIcon(markerIcon);
                markers[k].infoWindow.close();
              }
            }

            currentMarker.isActive = !currentMarker.isActive;
            if (currentMarker.isActive) {
              if (markerIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active")) {
                currentMarker.setIcon(markerIcon);
              }

              currentInfoWindow.open(map, marker);
            } else {
              if (markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")) {
                currentMarker.setIcon(markerIcon);
              }
              currentInfoWindow.close();
            }
          }).bind(this, markerElement, mapElement))
        })
      }
    }

  });
}