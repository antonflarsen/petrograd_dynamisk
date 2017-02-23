window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("Siden vises");
	visProdukt();
}

function visProdukt() {
	//klon template
	var klon = document.querySelector("#product_template").content.cloneNode(true);
	//sæt data ind i klon
	//append klon til .starterDish
	document.querySelector(".starterDish").appendChild(klon);
}
