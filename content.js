setInterval(check, 2000)
function check(){
	let temp = null

	temp = document.querySelector("div[id*='goog'")
	if(temp){
		temp.parentNode.removeChild(temp)
		temp = null
	}

	temp = document.querySelector(".ad-container.ad-container-single-media-element-annotations.ad-overlay")
	if(temp){
		temp.parentNode.removeChild(temp)
		temp = null
	}

	temp = document.querySelector("div[class='video-annotations']")
	if(temp){
		temp.parentNode.removeChild(temp)
		temp = null
	}

	temp = document.querySelector("div[class='annotation annotation-type-custom iv-promo']")
	if(temp){
		console.log(temp)
		temp.parentNode.removeChild(temp)
		temp = null
	}
}
