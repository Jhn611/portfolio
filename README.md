# My portfolio

link - https://jhn611.github.io/portfolio/

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

GitHub Pages uses `/portfolio/` by default, so a regular build already works for Pages.

For Docker or any deployment from the site root, override the base path during build:

```sh
$env:VITE_BASE_PATH='/'
npm run build
```

Dockerfile already does this automatically via `VITE_BASE_PATH=/`.
