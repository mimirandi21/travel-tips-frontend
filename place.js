class Place {
	static all = [];
	static placeContainer = document.getElementById("places-div");

	constructor({ id, name }) {
		this.id = id;
		this.name = name;

		this.main = document.createElement("div");
		this.main.id = `placeMain-${this.id}`;
		this.nameDiv = document.createElement("div");
		this.nameDiv.id = `placeName-${this.id}`;
		this.sectionDiv = document.createElement("div");
		this.sectionDiv.id = `placeSections-${this.id}`;
		this.main.append(this.nameDiv, this.sectionDiv);

		Place.all.push(this);
	}

	renderPlace = () => {
		this.nameDiv.innerHTML = `<h1>${this.name}</h1>`;
	};

	renderSection = () => {
		this.sectionDiv.innerHTML = this.allSections().map(
			(section) => section.renderSection() + section.renderTips()
		);
	};

	allSections = () => {
		return Section.all.filter((section) => section.place_id === this.id);
	};

	static renderAllPlaces() {
		Place.all.forEach((place) => {
			place.renderPlace();
			place.renderSection();
			Place.placeContainer.appendChild(place.main);
		});
	}
}
