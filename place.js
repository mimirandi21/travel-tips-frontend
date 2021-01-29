class Place {
	static all = [];
	static placeContainer = document.getElementById("places-div");

	constructor({ id, name }) {
		this.id = id;
		this.name = name;

		this.main = document.createElement("li");
		this.main.id = `placeMain`;
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
		}</h1><br>`;
	};

	renderAllSections = () => {
		this.allSections().forEach((section) => {
			section.renderSection();
			// section.appendFirstThreeTips();
			section.renderFirstThreeTips();
			// section.doit();
			return this.sectionDiv.appendChild(section.main);
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

	static searchPlace() {
		let searchPlaceBar = document.getElementById("searchbar");
		let input = searchPlaceBar.value.toLowerCase();

		let x = document.querySelectorAll("#placeMain");

		for (let i = 0; i < x.length; i++) {
			if (!x[i].innerHTML.toLowerCase().includes(input)) {
				x[i].style.display = "none";
			} else {
				x[i].style.display = "block";
			}
		}
	}
}
