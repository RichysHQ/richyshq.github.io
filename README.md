# richyshq.github.io

Static site for https://richyshq.tv, hosted on GitHub Pages. No build step, no framework.

## Files
- `index.html`, `style.css`, `script.js`: the whole site
- `images/`: logo, social icons, partner and merch art
- `CNAME`: custom domain for GitHub Pages
- `.nojekyll`: tells Pages to serve files as-is

## Common edits
- **Socials / linktree:** edit the `<nav class="links">` block in `index.html`.
- **Twitch channel:** change `data-channel` on `#twitch-player` and `#twitch-chat` in `index.html`.
  The embed's `parent` is filled in automatically from the page's hostname, so it works on
  the custom domain, `richyshq.github.io` and `localhost`.
- **Colors:** the variables at the top of `style.css`.

## Preview locally
```
python3 -m http.server 8000
```
Then open http://localhost:8000
