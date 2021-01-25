class Place {
	static all = [];
	static placeContainer = document.getElementById("places-div");

	constructor(name) {
		this.name = name;

		this.main = document.createElement("div");
		this.main.id = `place-${this.id}`;
		this.nameDiv = document.createElement("div");
		this.nameDiv.id = `place-${this.id}`;
		this.sectionDiv = document.createElement("div");
		this.sectionDiv.id = `place-${this.id}`;
		this.main.append(this.nameDiv, this.sectionDiv);

		Place.all.push(this);
	}

	renderPlace() {
		this.nameDiv.innerHTML = `<h1>${this.name}</h1>`;
	}

	allSections() {
		return Section.all.filter((section) => section.place_id === this.id);
	}
}
