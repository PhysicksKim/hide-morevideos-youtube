// ==UserScript==
// @name         YouTube 임베디드 동영상 더보기 제거
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  유튜브 임베디드 동영상에서 '동영상 더보기' 오버레이를 제거합니다.
// @match        *://*/*
// @grant        none
// @author       physickskim
// ==/UserScript==

(function() {
    'use strict';
    const css = `.ytp-pause-overlay { display: none !important; }`;
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
})();
