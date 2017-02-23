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
	klon.querySelector(".data_name").innerHTML = produkt.navn;
	klon.querySelector(".data_price").innerHTML = produkt.pris;

	var rabatpris = Math.ceil( produkt.pris - (produkt.pris*produkt.rabatsats/100 ));
	klon.querySelector(".discount_price").innerHTML = rabatpris;

	klon.querySelector(".data_dishimage img").src = "/imgs/small/" + produkt.billede + "-sm.jpg";

	if (produkt.udsolgt == false ) {
		//produktet er ikke udsolgt
		//udsolgtlinje skal fjernes
		var udsolgttekst = klon.querySelector(".udsolgttekst");
		udsolgttekst.parentNode.removeChild ( udsolgttekst );
	}

	//append klon til .starterDish
	document.querySelector(".produktliste").appendChild(klon);

}
