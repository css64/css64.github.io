//back random

function randomImg() {
		//array image

		var myImages = new Array();

		//images -> array
		myImages[1] = "img/cart1.jpg";
		myImages[2] = "img/cart2.jpg";
		myImages[3] = "img/cart3.jpg";
		myImages[4] = "img/cart4.jpg";

		//array links

		var myLinks = new Array();

		//links -> array
		css64.github.io
		myLinks[1] = "http://css64.github.io";
		myLinks[2] = "http://css64.github.io";
		myLinks[3] = "http://css64.github.io";
		myLinks[4] = "http://css64.github.io";

		var rnd = Math.floor(Math.random() * myImages.length);
		if (rnd == 0){
			rnd = 1;
		}

		//show
		document.write('<a href="'+myLinks[rnd]+'"><img src="'+myImages[rnd]+'" border="0"></a>');
}
