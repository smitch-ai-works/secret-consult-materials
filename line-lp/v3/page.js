"use strict";
const permitted = new Set(["line.me","liff.line.me","lin.ee","utage-system.com","sub.aione.co.jp"]);
let destination = "";
try {const u = new URL(window.LINE_ENTRY_CONFIG.lineUrl); if(u.protocol === "https:" && permitted.has(u.hostname)) destination = u.href;} catch {}
document.querySelectorAll("[data-line-entry]").forEach(button => button.addEventListener("click", () => {
 if(destination) location.assign(destination); else document.getElementById("registration-notice").showModal();
}));
