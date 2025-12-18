:root {
  --bg: #f6f6f4;
  --fg: #111;
  --muted: #666;
  --border: #ddd;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: Inter, sans-serif;
}

/* NAV */
.nav {
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
}

.nav-brand {
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  letter-spacing: 0.3em;
}

.nav-links {
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
  color: var(--muted);
}

/* HERO */
.hero {
  padding: 8rem 3rem 6rem;
  max-width: 900px;
}

.hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 5rem;
  letter-spacing: 0.25em;
}

.hero p {
  margin-top: 2rem;
  color: var(--muted);
  font-size: 1.1rem;
}

/* SECTIONS */
.section {
  padding: 5rem 3rem;
}

.section-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: var(--muted);
}

/* POSTERS */
.poster-grid.large {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}

.poster {
  position: relative;
}

.poster img {
  width: 100%;
  display: block;
}

.poster-info {
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.poster-info span {
  font-family: "Playfair Display", serif;
}

.poster-info button {
  background: none;
  border: 1px solid var(--border);
  padding: 0.4rem 0.8rem;
  cursor: pointer;
}

/* EDITORIAL */
.editorial {
  padding: 6rem 3rem;
  max-width: 800px;
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
}

/* FEATURE */
.feature {
  padding: 6rem 3rem;
  display: grid;
  gap: 3rem;
}

.feature img {
  width: 100%;
}

.feature-text h2 {
  font-family: "Playfair Display", serif;
  font-size: 3rem;
}

.feature-text a {
  display: inline-block;
  margin-top: 1.5rem;
  border-bottom: 1px solid var(--fg);
  text-decoration: none;
  color: var(--fg);
}

/* PRODUCTS */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.product-grid img {
  width: 100%;
}

.product-grid button {
  margin-top: 0.5rem;
  background: none;
  border: 1px solid var(--border);
  padding: 0.4rem;
}

/* FOOTER */
.footer {
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  color: var(--muted);
}
