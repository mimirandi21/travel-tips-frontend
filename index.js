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
	fetch("https://obscure-depths-42428.herokuapp.com/places", {
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
	newarea.id = "thisonehere";
	cardClone.appendChild(newarea);
	section.allTips().forEach((tip) => tip.rendernewtip());
	section.allTips().forEach((tip) => newarea.append(tip.main));
	section.allTips().forEach((tip) => tip.renderTip());
	section.allTips().forEach((tip) => tip.changeColorDiv());
	section.allTips().forEach((tip) => tip.likeInfo());
	section.allTips().forEach((tip) => tip.dislikeInfo());
};
let renderNewTipToCard = (cardClone, newTip) => {
	let newarea = document.createElement("div");
	newarea.id = "thisonehere";
	cardClone.appendChild(newarea);
	newTip.rendernewtip();
	newarea.append(newTip.main);
	newTip.changeColorDiv();
	newTip.likeInfo();
	newTip.dislikeInfo();
};
function renderNewTipForm(cardClone, section) {
	let newTipForm = document.createElement("form");
	newTipForm.id = "newTipForm";
	newTipForm.innerHTML = `<h3>Add a new tip:</h3><label>Tip:</label>
	<textarea type="text" name="new-tip-info" value=""></textarea>
	<br/>
	<label>Suggestion:</label>
	<select id="color-check">
		<option value="green">Do this!</option>
		<option value="red">Avoid this.</option>
		<option value="yellow">Just letting you know.</option>
		</select>
	<br/>
	<input type="hidden" name="this-place" value="${section.place_id}">
	<input type="hidden" name="this-section" value="${section.id}">
	
	<input type="submit" id=new-tip value="Submit">`;
	cardClone.appendChild(newTipForm);
}

function newTipCreator(sections, places, newinfo, colors) {
	TipAdapter.makeNewTip(sections, places, newinfo, colors);
}
