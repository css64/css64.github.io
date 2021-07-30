//back random

function randomImg() {
		//array image

		var myImages = new Array();

		//images -> array
		myImages[1] = "img/ba1.svg";
		myImages[2] = "img/ba2.svg";
		myImages[3] = "img/ba3.svg";
		myImages[4] = "img/ba4.svg";
		myImages[5] = "img/ba5.svg";
		myImages[6] = "img/ba6.svg";
		myImages[7] = "img/ba7.svg";

		var rnd = Math.floor(Math.random() * myImages.length);
		if (rnd == 0){
			rnd = 1;
		}

		//show
		document.write('<img class="back-ba" src="'+myImages[rnd]+'" border="0"></a>');
}
