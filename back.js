//back random

function randomImg() {
		//array image

		var myImages = new Array();

		//images -> array
		myImages[1] = "img/cart1.jpg";
		myImages[2] = "img/cart2.jpg";
		myImages[3] = "img/cart3.jpg";
		myImages[4] = "img/cart4.jpg";

		var rnd = Math.floor(Math.random() * myImages.length);
		if (rnd == 0){
			rnd = 1;
		}

		//show
		document.write('<img class="back-img" src="'+myImages[rnd]+'" border="0"></a>');
}
