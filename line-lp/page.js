(() => {
  "use strict";
  const notice = document.getElementById("registration-notice");
  const lineUrl = window.LINE_ENTRY_CONFIG?.lineUrl?.trim() || "";
  const allowedHosts = new Set(["line.me", "liff.line.me", "lin.ee", "utage-system.com", "sub.aione.co.jp"]);
  let destination = "";
  if (lineUrl) {
    try {
      const url = new URL(lineUrl);
      if (url.protocol === "https:" && allowedHosts.has(url.hostname)) destination = url.href;
    } catch {}
  }
  document.querySelectorAll("[data-line-cta]").forEach(button => {
    button.addEventListener("click", () => {
      if (destination) window.location.assign(destination);
      else notice.showModal();
    });
  });
})();
