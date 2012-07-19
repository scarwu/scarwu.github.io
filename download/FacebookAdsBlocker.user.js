// ==UserScript==
// @name           Facebook Ads Blocker
// @version        0.2.2
// @author         Scar Wu
// @namespace      http://scar.simcz.tw
// @description    Hidden Facebook Ads
// @include        *
// ==/UserScript==

window.onload = function() {
	hideAds();
};

document.addEventListener('DOMNodeInserted', function() {
	hideAds();
});

function hideAds() {
	if(document.location.host == 'www.facebook.com') {
		var pagelet_side_ads = document.getElementById('pagelet_side_ads');
		if(pagelet_side_ads != undefined)
			pagelet_side_ads.innerHTML = null;
		
		var ego_column = document.getElementsByClassName('ego_column');
		if(ego_column != undefined && ego_column.length > 0) {
			for(var index in ego_column) {
				if(ego_column[index].getElementsByClassName('adsCategoryTitleLink') != undefined) {
					ego_column[index].innerHTML = null;
					break;
				}
			}
		}
			
		var fbTimelineSideAds = document.getElementsByClassName('fbTimelineSideAds');
		for(var index in fbTimelineSideAds) {
			fbTimelineSideAds[index].innerHTML = null;
		}
	}
}
