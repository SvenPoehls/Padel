/* ==========================================================================
   Padel Eckernförde – main.js (Entwurf 2)
   Bewusst klein: Menü, Jahr im Footer, Schnellwahl → Buchungsseite.
   Keine Scroll-Animationen; die Seite funktioniert komplett ohne JS.
   ========================================================================== */
(function () {
  "use strict";
  var root = document.documentElement;

  /* Mobiles Menü ------------------------------------------------------------ */
  var burger = document.querySelector(".burger");
  function setNav(open) {
    root.classList.toggle("nav-open", open);
    if (!burger) return;
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  }
  if (burger) {
    burger.addEventListener("click", function () { setNav(!root.classList.contains("nav-open")); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("nav-open")) { setNav(false); burger.focus(); }
    });
    window.matchMedia("(min-width: 1100px)").addEventListener("change", function () { setNav(false); });
  }

  /* Schnellwahl von der Startseite („?tag=heute“) auf der Buchungsseite zeigen */
  var picked = document.querySelector("[data-picked]");
  if (picked) {
    var days = { heute: "heute", morgen: "morgen", wochenende: "am Wochenende" };
    var tag = new URLSearchParams(window.location.search).get("tag");
    if (tag && days[tag]) {
      picked.querySelector("[data-picked-day]").textContent = days[tag];
      picked.hidden = false;
    }
  }

  /* Jahr im Footer ---------------------------------------------------------- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
