function eraseElement(queryElement){
	let temp = document.querySelector(queryElement)
	if(temp){
			temp.parentNode.removeChild(temp)
	}
}

// adv classes to delete DOM from player
let advs = [
"div[id*='goog'",
".ad-container.ad-container-single-media-element-annotations.ad-overlay",
"div[class='video-annotations']",
"div[class='annotation annotation-type-custom iv-promo']",
"div[class='annotation annotation-type-custom iv-branding']",
"div[class='ytp-chrome-top ytp-share-button-visible']",
"div[class='ytp-ce-element ytp-ce-channel ytp-ce-channel-this ytp-ce-bottom-left-quad ytp-ce-size-1280 ytp-ce-element-show']",
"div[class='ytp-ce-element ytp-ce-video ytp-ce-bottom-left-quad ytp-ce-size-1280 ytp-ce-element-show']",
"div[class='ytp-ce-element ytp-ce-video ytp-ce-bottom-right-quad ytp-ce-size-1280 ytp-ce-element-show']"
]

//skip button class
let skipButtonClass = '.videoAdUiSkipButton'

//  main
setInterval(check, 2000)
// check
function check(){

	let skipButton = document.querySelector(skipButtonClass)
	if(skipButton){
		skipButton.click()
	}

	for(let adv of advs){
		eraseElement(adv)
	}

}
