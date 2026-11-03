// Twitch embeds.
// The old site broke because Twitch only plays an embed on domains listed in its
// `parent` parameter, and the page was served from www.richyshq.tv (the CNAME),
// which wasn't in the list. Using the current hostname means the embed works on
// the custom domain, on richyshq.github.io, and on localhost without any edits.
(function () {
  var host = window.location.hostname || 'localhost';

  function mount(id, src) {
    var slot = document.getElementById(id);
    if (!slot) return;
    var frame = document.createElement('iframe');
    frame.src = src;
    frame.title = id === 'twitch-chat' ? 'Twitch chat' : 'Twitch stream';
    frame.setAttribute('allowfullscreen', '');
    frame.setAttribute('allow', 'autoplay; fullscreen');
    frame.setAttribute('scrolling', 'no');
    frame.loading = 'lazy';
    slot.appendChild(frame);
  }

  var parent = 'parent=' + encodeURIComponent(host);
  var channel = (document.getElementById('twitch-player') || {}).dataset.channel || 'richyshq';

  // Muted autoplay is the only autoplay browsers allow.
  mount('twitch-player',
    'https://player.twitch.tv/?channel=' + channel + '&' + parent + '&muted=true&autoplay=true');
  mount('twitch-chat',
    'https://www.twitch.tv/embed/' + channel + '/chat?' + parent + '&darkpopout');
})();

// Copy-to-clipboard buttons for game IDs.
document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var text = btn.dataset.copy;
    var done = function () {
      var old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = old; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {});
    }
  });
});

// "Back to socials" button scrolls to the top where the header links are.
document.querySelectorAll('[data-scroll-top]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

var yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
