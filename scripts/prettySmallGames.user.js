// ==UserScript==
// @name         Pretty Small Games
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Improve Small Games old-school UI.
// @author       Vladislav Maksimov
// @match        https://small-games.info/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=small-games.info
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        :root {
            font-size: 62.5%;
        }
    
        p, a, span, b, strong, i, th, td, div, input[type=button], input[type=text], input[type=text]::placeholder, textarea, .chatbro_send_input::before {
            font-size: 1.4rem !important;
            line-height: 150% !important;
        }
    
        h3 {
            font-size: 1.6rem !important;
            line-height: 150% !important;
        }
    
        .chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper .chatbro_send_input {
            transform: scale(1) !important;
        }
    `);
})();
