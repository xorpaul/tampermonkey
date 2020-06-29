// ==UserScript==
// @name         forum.tt-news.de increase width of forum threads/posts
// @namespace    https://forum.tt-news.de
// @version      0.1
// @description  increase width of forum threads/posts to something in the 2000s
// @author       Andreas "xorpaul" Paul
// @match        https://forum.tt-news.de/showthread.php*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('#main-content { max-width: 85% !important; min-width: 80% !important; }');
