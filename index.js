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

// let placesDiv = document.querySelector("#places");
// let cards = document.querySelectorAll("card#main");
// cards.forEach((card) => card.addEventListener("click", onCardClick));

// let toggleExpansion = (element, to, duration = 350) => {
// 	return new Promise((res) => {
// 		requestAnimationFrame(() => {
// 			element.style.transition = `
// 				width $(duration)ms ease-in-out,
// 				height $(duration)ms ease-in-out,
// 				left $(duration)ms ease-in-out,
// 				top $(duration)ms ease-in-out
// 				`;
// 			element.style.top = to.top;
// 			element.style.left = to.left;
// 			element.style.width = to.width;
// 			element.style.top = to.height;
// 		});
// 		setTimeout(res, duration);
// 	});
// };
// const onCardClick = async (e) => {
// 	const card = e.currentTarget;
// 	const cardClone = card.cloneNode(true);
// 	const { top, left, width, height } = card.getBoundingClientRect();
// 	cardClone.style = `
// 		width: 70%,
// 		height: 70%,
// 		position: fixed.
// 		z-index: 10000
// 	`;
// 	placesDiv.appendChild(cardClone);
// 	card.style.opacity = "0";
// };
// 	card.parentNode.appendChild(cardClone);

// 	requestAnimationFrame(() => {
// 		element.style.transition = `
// 			width 350ms ease-in-out,
// 			height 350ms ease-in-out,
// 			left 350ms ease-in-out,
// 			top 350ms ease-in-out
// 		`;
// 		element.style.top = 0;
// 		element.style.left = 0;
// 		element.style.width = "100vw";
// 		element.style.height = "100vw";
// 	});
// const closeButton = document.createElement("button");
// closeButton.style = `
// 	position:fixed;
// 	z-index:10000;
// 	top: 35px;
// 	right:35px;
// 	width:35px;
// 	height: 35px;
// 	border-radius: 50%;
// 	background-color: #222;
// 	`;
// closeButton.addEventListener("click", async () => {
// 	closeButton.remove();
// });
// await this.toggleExpansion(cardClone, {
// 	top: 0,
// 	left: 0,
// 	width: "100vw",
// 	height: "100vh",
// });
// cardClone.appendChild(closeButton);
// };
