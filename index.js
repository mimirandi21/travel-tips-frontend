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

let cardCloneCreate = (cardClone, section) => {
	let newarea = document.createElement("div");
	cardClone.appendChild(newarea);
	section.allTips().forEach((tip) => tip.rendernewtip());
	section.allTips().forEach((tip) => newarea.append(tip.main));
	section.allTips().forEach((tip) => tip.renderTip());
	section.allTips().forEach((tip) => tip.changeColorDiv());
};
