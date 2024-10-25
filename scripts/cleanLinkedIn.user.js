// ==UserScript==
// @name         Clean LinkedIn
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Remove all the brain rot from LinkedIn.
// @author       Vladislav Maksimov
// @match        https://www.linkedin.com/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png
// ==/UserScript==

/* eslint-disable no-case-declarations */

(function () {
  "use strict";

  switch (window.location.href) {
    case "https://www.linkedin.com/mynetwork/grow/":
    case "https://www.linkedin.com/mynetwork/catch-up/all/":
      const cleaner = new MutationObserver(() => {
        const adElements = [
          document.querySelector(".mn-sales-navigator-upsell"),
          ...Array.from(document.querySelectorAll(".ad-banner-container")),
        ];
        for (const element of adElements) {
          if (!element) continue;
          element.remove();
        }

        const additionalInfoBlock = document.querySelector(
          'footer[aria-label="LinkedIn Footer Content"]'
        );
        if (additionalInfoBlock) {
          additionalInfoBlock.remove();
        }

        const gameBlocks = document.querySelectorAll(
          ".ps-game-entrypoint-carousel__dividers"
        );
        for (const gameBlock of gameBlocks) {
          if (!gameBlock) continue;
          gameBlock.remove();
        }
      });

      cleaner.observe(document.body, {
        subtree: true,
        childList: true,
      });

      break;
  }
})();
