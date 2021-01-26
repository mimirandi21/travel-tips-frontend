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
		this.sectionDiv.id = `placeSections`;
		this.main.append(this.nameDiv, this.sectionDiv);

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

	static getPlaces = () => {
		return fetch("http://localhost:3000/places")
			.then((res) => res.json())
			.then((placeInfo) => {
				placeInfo.forEach(function (place) {
					place.sections.forEach(function (sec) {
						new Section(sec);
					});
					place.tips.forEach(function (tip) {
						new Tip(tip);
					});
					new Place(place);
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};
}

Place.getPlaces().then(Place.renderAllPlaces);
