class PlaceAdapter {
	static baseURL = "http://localhost:3000/places";

	static getPlaces() {
		return fetch(PlaceAdapter.baseURL)
			.then((resp) => resp.json())
			.then(function (plInfo) {
				console.log(plInfo);
			});
	}
}
