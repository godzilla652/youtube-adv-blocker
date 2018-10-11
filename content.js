function eraseElement(queryElement){
	let temp = document.querySelector(queryElement)
	if(temp){
			temp.parentNode.removeChild(temp)
	}
}
let advs = ["div[id*='goog'", ".ad-container.ad-container-single-media-element-annotations.ad-overlay","div[class='video-annotations']",
"div[class='annotation annotation-type-custom iv-promo']", "div[class='annotation annotation-type-custom iv-branding']", "div[class='ytp-chrome-top ytp-share-button-visible']"]


setInterval(check, 2000)
function check(){
	for(let adv of advs){
		eraseElement(adv)
	}
}
