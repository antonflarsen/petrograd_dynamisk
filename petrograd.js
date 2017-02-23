window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("Siden vises");
	//LÆS PRODUKTLISTE
	$.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);
}

function visProduktListe(listen) {
	console.table(listen);
	listen.forEach(visProdukt);
}

function visProdukt(produkt) {
	console.log(produkt);
	//klon template
	var klon = document.querySelector("#product_template").content.cloneNode(true);
	//sæt data ind i klon
	//append klon til .starterDish
	document.querySelector(".produktliste").appendChild(klon);
}
