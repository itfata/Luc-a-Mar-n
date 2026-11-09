// Oro Rojo — interactions
(function () {
  // Chapter spines: hover or click opens a chapter
  var spines = document.querySelectorAll('.spine');
  function openSpine(target) {
    spines.forEach(function (s) {
      var on = s === target;
      s.classList.toggle('on', on);
      s.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
  }
  spines.forEach(function (s) {
    s.addEventListener('click', function () { openSpine(s); });
    s.addEventListener('mouseenter', function () {
      if (!s.classList.contains('on')) openSpine(s);
    });
  });

  // Recipe tabs: switch the page shown
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.rp');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      var i = t.getAttribute('data-i');
      tabs.forEach(function (x) {
        var on = x === t;
        x.classList.toggle('on', on);
        x.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-i') !== i; });
    });
  });

  // Newsletter: showcase only, no data is sent anywhere
  var form = document.querySelector('.nl-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button');
      if (btn) btn.textContent = 'Gracias ✦';
    });
  }
})();
