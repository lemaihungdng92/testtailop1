<script>
	var i = 0;
	var images = [];
	var time = 2000;

	//img
	images[0] = 'img1.jpg';
	images[1] = 'img2.jpg';
	images[2] = 'img3.jpg';

	//change imge
	function changeImage(){

		document.slide.src = images[i];

		if(i < images.length -1){
			i++;
		}else {
			i = 0;
		}
		setTimeout("changeImage()", time);
	}

	window.onload = changeImage;

</script>