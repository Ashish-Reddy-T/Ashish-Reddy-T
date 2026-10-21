# Site source

Static files deployed to GitHub Pages (`npm run deploy` from repo root).

## Edit content

- **Bio, links, sections:** [`index.html`](index.html)
- **Styles:** [`stylesheet.css`](stylesheet.css) (from [Jon Barron’s template](https://github.com/jonbarron/jonbarron.github.io))
- **Headshot:** replace [`images/AshishReddyT.jpg`](images/AshishReddyT.jpg)
- **CV:** add `data/ashish_cv.pdf`, then in `index.html` replace the gray “CV (coming soon)” text with  
  `<a href="data/ashish_cv.pdf">CV</a>`

## Add a project

1. Add a thumbnail under `images/`.
2. In `index.html`, copy an entire `<tr>...</tr>` block under **Projects** (see the `TEMPLATE` comment).
3. Update title, venue line, links, and description.

## Add a publication

Duplicate a project `<tr>` under **Publications** (or use a dedicated academic project page later).
