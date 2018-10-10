setInterval(check, 2000)
function check(){
	let adv = document.querySelector("div[id*='goog'")
	if(adv){
		adv.parentNode.removeChild(adv)
		let ol = document.querySelector(".ad-container.ad-container-single-media-element-annotations.ad-overlay")
		ol.parentNode.removeChild(ol)
	}
}
