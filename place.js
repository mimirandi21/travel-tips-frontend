class Place {
	static all = [];
	static placeContainer = document.getElementById("places-div");

	constructor({ id, name }) {
		this.id = id;
		this.name = name;

		this.main = document.createElement("li");
		this.main.id = `placeMain-${this.id}`;
		this.nameDiv = document.createElement("div");
		this.nameDiv.id = `placeName`;
		this.sectionDiv = document.createElement("div");
		this.sectionDiv.id = `placeSections`;
		let space = document.createElement("p");
		space.id = `placeSpace`;
		space.innerText = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
		this.main.append(this.nameDiv, this.sectionDiv, space);

		Place.all.push(this);
	}

	renderPlace = () => {
		this.nameDiv.innerHTML = `<h1 id="${this.name.split(",")[0]}">${
			this.name
		}</h1>`;
	};

	renderAllSections = () => {
		this.allSections().forEach((section) => {
			section.renderSection();
			section.renderTips();
			this.sectionDiv.appendChild(section.main);
		});
	};

	allSections = () => {
		return Section.all.filter((section) => section.place_id === this.id);
	};

	static renderAllPlaces() {
		Place.all.forEach((place) => {
			place.renderPlace();
			place.renderAllSections();
			Place.placeContainer.appendChild(place.main);
		});
	}
}
