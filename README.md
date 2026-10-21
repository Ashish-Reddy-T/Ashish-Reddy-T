# Site source

Static site deployed with `npm run deploy` from the repo root (publishes this folder to `gh-pages`).

**Upstream:** Cloned from [jonbarron/jonbarron.github.io](https://github.com/jonbarron/jonbarron.github.io) (see [`UPSTREAM.txt`](UPSTREAM.txt) for commit).

## Edit content

- **Bio, links, sections:** [`index.html`](index.html)
- **Headshot:** replace [`images/AshishReddyT.jpg`](images/AshishReddyT.jpg)
- **CV:** add `data/ashish_cv.pdf`, then replace the gray “CV (coming soon)” in `index.html` with  
  `<a href="data/ashish_cv.pdf">CV</a>`

## Add a project

1. Add a thumbnail under `images/` (160×160 works well; Jon uses `width="160" height="160"` on `<img>`).
2. In `index.html`, copy a full `<tr>...</tr>` under **Projects** (see the `TEMPLATE` comment). The row shape matches Jon’s static entries (e.g. `blind-date` row in upstream `index.html`).
3. Update title, venue line, links, and description.

## Refresh from upstream (optional)

```bash
git clone --depth 1 https://github.com/jonbarron/jonbarron.github.io.git /tmp/jonbarron.github.io
cp /tmp/jonbarron.github.io/stylesheet.css site/stylesheet.css
```

Do **not** replace your `index.html` wholesale—only pull CSS or copy individual `<tr>` blocks you need.
