document.addEventListener("DOMContentLoaded", () => {
	PlaceAdapter.fetchPlaces().then(Place.renderAllPlaces);
});

let newDest = document.getElementById("new-place-name");
let newDestSubmit = document.getElementById("new-place-form");

newDestSubmit.addEventListener("submit", (e) => {
	e.preventDefault();
	let dest = newDest.value;
	data = {
		place: { name: dest },
	};
	fetch("http://localhost:3000/places", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(data),
	}).then(location.reload());
});
