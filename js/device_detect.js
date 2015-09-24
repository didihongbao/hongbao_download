/**
 * Device detect
 * Author: LiuQian <112486391@qq.com>
 */

'use strict';

// Check in weixin webview and toggle overlay
function weixin(ua, e) {
	if (/micromessenger/.test(ua)) {
		e.preventDefault(); // Prevent default redirect

		var wxOverlay = document.querySelector('.wx-overlay');
		wxOverlay.setAttribute('class', 'wx-overlay -active');
	}
}

window.onload = function() {
  var ua = navigator.userAgent.toLowerCase(),
    device = (/android/.test(ua)) ? 'android': 'ios', // Default device: iOS
    appLink = APP_LINK_MAP[device],
    appDownloadBtnEl = document.getElementById('app-download-btn');
  
  appDownloadBtnEl.setAttribute('href', appLink);

  appDownloadBtnEl.onclick = function(e) {
  	weixin(ua, e);
  };
};