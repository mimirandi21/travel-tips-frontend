class Place {
	static all = [];
	static placeContainer = document.getElementById("places-div");

	constructor({ id, name }) {
		this.id = id;
		this.name = name;

		this.main = document.createElement("li");
		this.main.id = `main`;
		this.nameDiv = document.createElement("div");
		this.nameDiv.id = `placeName`;
		this.sectionDiv = document.createElement("div");
		this.sectionDiv.id = `placeSections`;
		let space = document.createElement("p");
		space.id = `placeSpace`;
		space.innerText = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
		this.main.append(this.nameDiv, this.sectionDiv, space);

		this.nameDiv.addEventListener("click", this.renderPlaceSpace);

		Place.all.push(this);
	}

	renderPlace = () => {
		this.nameDiv.innerHTML = `<h1 id="${this.name.split(",")[0]}">${
			this.name
		}</h1><br>`;
	};

	renderAllSections = () => {
		this.allSections()
			.sort((a, b) => a.name.localeCompare(b.name))
			.reverse()
			.forEach((section) => {
				section.renderSection();
				section.jfk();
				return this.sectionDiv.appendChild(section.main);
			});
	};

	allSections = () => {
		return Section.all.filter((section) => section.place_id === this.id);
	};

	renderPlaceSpace = (e) => {
		let thisplace = e.currentTarget.parentNode.childNodes[1];
		if (thisplace.style.display == "none") {
			thisplace.setAttribute(
				"style",
				"display:flex;justify-content:space-around;align-items:flex-start;flex-direction:row;flex-wrap:wrap;height:600px"
			);
		} else {
			thisplace.style.display = "none";
		}
	};

	static renderAllPlaces() {
		Place.all
			.sort()
			.reverse()
			.forEach((place) => {
				place.renderPlace();
				place.renderAllSections();
				Place.placeContainer.appendChild(place.main);
				$("#placeSections")
					.first()
					.css("display", "flex")
					.css("justify-content", "space-around")
					.css("align-items", "flex-start")
					.css("flex-direction", "row")
					.css("flex-wrap", "wrap")
					.css("height", "600px");
			});
	}

	static searchPlace() {
		let searchPlaceBar = document.getElementById("searchbar");
		let input = searchPlaceBar.value.toLowerCase();

		let x = document.querySelectorAll("#main");

		for (let i = 0; i < x.length; i++) {
			if (!x[i].innerHTML.toLowerCase().includes(input)) {
				x[i].style.display = "none";
			} else {
				x[i].style.display = "block";
			}
		}
	}
}
