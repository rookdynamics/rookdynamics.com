/* Theme toggle (system default, manual override persisted) and mobile menu close. */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-btn');
  var meta = document.querySelector('meta[name="theme-color"]');

  function hasOverride() {
    try { var v = localStorage.getItem('rd-theme'); return v === 'dark' || v === 'light'; } catch (e) { return false; }
  }
  function apply(t) {
    if (t === 'dark') { root.setAttribute('data-theme', 'dark'); } else { root.removeAttribute('data-theme'); }
    if (btn) {
      btn.setAttribute('aria-pressed', t === 'dark');
      btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    if (meta) meta.setAttribute('content', t === 'dark' ? '#121316' : '#ffffff');
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  var mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function onOs(e) { if (!hasOverride()) apply(e.matches ? 'dark' : 'light'); }
  if (mq) { mq.addEventListener ? mq.addEventListener('change', onOs) : mq.addListener(onOs); }

  if (btn) {
    btn.addEventListener('click', function () {
      var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(t);
      try { localStorage.setItem('rd-theme', t); } catch (e) {}
    });
  }

  document.querySelectorAll('.nav ul a').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('nav-toggle');
      if (t) t.checked = false;
    });
  });
})();
