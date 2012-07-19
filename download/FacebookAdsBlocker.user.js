// ==UserScript==
// @name           Facebook Ads Blocker
// @version        0.1.0
// @author         Scar Wu
// @namespace      http://scar.simcz.tw
// @description    Hidden Facebook Ads
// @include        *
// ==/UserScript==

var _id = [
	'pagelet_ego_pane_w',
	'pagelet_side_ads'
]

var _class = [
	'fbTimelineSideAds'
]

window.onload = hideAds();

document.addEventListener('DOMNodeInserted', function() {
	hideAds();
});

function hideAds() {
	if(document.location.host == 'www.facebook.com') {
		for(var key in _id)
			if(document.getElementById(_id[key]) != undefined)
				document.getElementById(_id[key]).innerHTML = null;
		
		for(var key in _class)
			if(document.getElementsByClassName(_class[key]) != undefined)
				for(var index in document.getElementsByClassName(_class[key]))
					document.getElementsByClassName(_class[key])[index].innerHTML = null;
	}
}
