//back random

function randomImg() {
		//array image

		var myImages = new Array();

		//images -> array
		myImages[1] = "img/co1.jpg";
		myImages[2] = "img/co2.jpg";
		myImages[3] = "img/co3.jpg";
		myImages[4] = "img/co4.jpg";
		myImages[5] = "img/co5.jpg";
		myImages[6] = "img/co6.jpg";
		myImages[7] = "img/co7.jpg";

		var rnd = Math.floor(Math.random() * myImages.length);
		if (rnd == 0){
			rnd = 1;
		}

		//show
		document.write('<img class="back-img" src="'+myImages[rnd]+'" border="0"></a>');
}
