function eraseElement(queryElement){
	let temp = document.querySelector(queryElement)
	if(temp){
			temp.parentNode.removeChild(temp)
	}
}

setInterval(check, 2000)
function check(){

	eraseElement("div[id*='goog'")
	eraseElement(".ad-container.ad-container-single-media-element-annotations.ad-overlay")
	eraseElement("div[class='video-annotations']")
	eraseElement("div[class='annotation annotation-type-custom iv-promo']")
	eraseElement("div[class='annotation annotation-type-custom iv-branding']")
	eraseElement("div[class='ytp-chrome-top ytp-share-button-visible']")

	// temp = document.querySelector("div[id*='goog'")
	// if(temp){
	// 	temp.parentNode.removeChild(temp)
	// 	temp = null
	// }
	//
	// temp = document.querySelector(".ad-container.ad-container-single-media-element-annotations.ad-overlay")
	// if(temp){
	// 	temp.parentNode.removeChild(temp)
	// 	temp = null
	// }
	//
	// temp = document.querySelector("div[class='video-annotations']")
	// if(temp){
	// 	temp.parentNode.removeChild(temp)
	// 	temp = null
	// }
	//
	// temp = document.querySelector("div[class='annotation annotation-type-custom iv-promo']")
	// if(temp){
	// 	temp.parentNode.removeChild(temp)
	// 	temp = null
	// }
	//
	// temp = document.querySelector("div[class='annotation annotation-type-custom iv-branding']")
	// if(temp){
	// 	temp.parentNode.removeChild(temp)
	// 	temp = null
	// }

}
