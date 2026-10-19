(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Dropdown
  document.querySelectorAll(".has-dropdown > button").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var li = btn.parentElement;
      var open = li.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".has-dropdown.is-open").forEach(function (li) {
      if (!li.contains(e.target)) {
        li.classList.remove("is-open");
        li.querySelector("button").setAttribute("aria-expanded", "false");
      }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll(".has-dropdown.is-open").forEach(function (li) {
      li.classList.remove("is-open");
      var b = li.querySelector("button");
      b.setAttribute("aria-expanded", "false");
      b.focus();
    });
  });

  // Hours: Mon to Sat 8am to 4pm, Sun 9am to 1pm (America/New_York)
  var HOURS = { 0: [9, 13], 1: [8, 16], 2: [8, 16], 3: [8, 16], 4: [8, 16], 5: [8, 16], 6: [8, 16] };
  function shopNow() {
    try {
      var parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
      var map = {};
      parts.forEach(function (p) { map[p.type] = p.value; });
      var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      return { day: days[map.weekday], hour: (parseInt(map.hour, 10) % 24) + parseInt(map.minute, 10) / 60 };
    } catch (err) {
      var d = new Date();
      return { day: d.getDay(), hour: d.getHours() + d.getMinutes() / 60 };
    }
  }
  function fmt(h) { var s = h > 12 ? h - 12 : h; return s + (h >= 12 ? "pm" : "am"); }
  var now = shopNow();
  var today = HOURS[now.day];
  var isOpen = now.hour >= today[0] && now.hour < today[1];
  document.querySelectorAll("[data-open-badge]").forEach(function (el) {
    el.classList.add(isOpen ? "is-open" : "is-closed");
    if (isOpen) {
      el.textContent = "Open now until " + fmt(today[1]);
    } else if (now.hour < today[0]) {
      el.textContent = "Closed now, opens " + fmt(today[0]) + " today";
    } else {
      var next = HOURS[(now.day + 1) % 7];
      el.textContent = "Closed now, opens " + fmt(next[0]) + " tomorrow";
    }
  });
  document.querySelectorAll("[data-day]").forEach(function (row) {
    var d = row.getAttribute("data-day").split(",").map(Number);
    if (d.indexOf(now.day) !== -1) row.classList.add("is-today");
  });

  // Contact form: ?topic= prefill and mail handoff
  var form = document.getElementById("message-form");
  if (form) {
    var params = new URLSearchParams(window.location.search);
    var topic = params.get("topic");
    var select = form.querySelector("#topic");
    if (topic && select) {
      Array.prototype.forEach.call(select.options, function (o) { if (o.value === topic) select.value = topic; });
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);
      var subject = "Website message: " + (select ? select.options[select.selectedIndex].text : "Question");
      var body = "Name: " + data.get("name") + "\nPhone: " + (data.get("phone") || "") + "\nEmail: " + data.get("email") + "\n\n" + data.get("message");
      window.location.href = "mailto:madilynnsllc@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var status = document.getElementById("form-status");
      if (status) status.textContent = "Your email app should open with your message ready to send.";
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
