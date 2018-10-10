setInterval(check, 2000)
function check(){
	let adv = document.querySelector("div[id*='goog'")
	if(adv){
		adv.parentNode.removeChild(adv)
		let temp = document.querySelector(".ad-container.ad-container-single-media-element-annotations.ad-overlay")
		temp.parentNode.removeChild(temp)
		temp = document.querySelector("div[class='video-annotations']")
		temp.parentNode.removeChild(temp)
	}
}
