document.addEventListener("DOMContentLoaded", () => {
	PlaceAdapter.fetchPlaces().then(Place.renderAllPlaces);
});
let searchPlaceBar = document.getElementById("searchbar");

function searchPlace() {
	let input = searchPlaceBar.value.toLowerCase();
	let x = document.getElementsByTagName("li");

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		} else {
			x[i].style.display = "list-item";
		}
	}
}
let newDest = document.getElementById("new-place-name");
let newDestSubmit = document.getElementById("new-place-form");

newDestSubmit.addEventListener("submit", (e) => {
	e.preventDefault();
	let dest = newDest.value;
	fetch("http://localhost:3000/places", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(dest),
	});
});
