//back random

function randomImg() {
		//array image

		var myImages = new Array();

		//images -> array
		myImages[1] = "img/vo1.svg";
		myImages[2] = "img/vo2.svg";
		myImages[3] = "img/vo3.svg";
		myImages[4] = "img/vo4.svg";
		myImages[5] = "img/vo5.svg";
		myImages[6] = "img/vo6.svg";
		myImages[7] = "img/vo7.svg";


		var rnd = Math.floor(Math.random() * myImages.length);
		if (rnd == 0){
			rnd = 1;
		}

		//show
		document.write('<div class="back-vo" style="background: url('+myImages[rnd]+') repeat-y;"></div>');
}
