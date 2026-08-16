//- Google map function for getting latitude and longitude
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