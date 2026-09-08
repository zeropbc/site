<template>
  <div class="landing">
    <header class="site-header">
      <div class="header-row">
        <a href="/" class="brand" aria-label="Zero Labs">
          <span class="brand-mark">z0</span>
          <span class="brand-name">Zero Labs</span>
        </a>
        <nav class="nav" aria-label="Main Navigation">
          <a href="#projects">Projects</a>
          <a href="#news">News</a>
          <a href="/helios">Helios</a>
          <a href="#more">More</a>
        </nav>
      </div>
    </header>

    <main id="main">
      <section class="hero">
        <h1>Build what<br />should exist.</h1>
        <p class="hero-tag">Open By Default · Public Benefit Organization</p>
        <p class="subtitle">
          An independent PBO building open-source, Linux-first technology — grounded in privacy, security, and local-first computing.
        </p>
      </section>

      <section class="featured" aria-label="Featured work">
        <a href="/helios" class="featured-card">
          <div class="featured-media">
            <img src="/cdn/Helios.png" alt="Helios" />
          </div>
          <div class="featured-body">
            <p class="eyebrow">Projects</p>
            <h2>Helios</h2>
            <p class="read-time">In design phase.</p>
          </div>
        </a>
      </section>

      <section id="projects" class="section projects">
        <div class="section-head">
          <h2>Recent projects</h2>
          <a href="/helios" class="view-all">View all</a>
        </div>
        <div class="cards">
          <a href="/helios" class="card">
            <div class="card-media"><img src="/cdn/Helios.png" alt="" /></div>
            <div class="card-body">
              <p class="eyebrow">Projects</p>
              <h3>Helios</h3>
              <p class="read-time">In design phase.</p>
            </div>
          </a>
        </div>
      </section>

      <section id="news" class="section news">
        <div class="section-head">
          <h2>Recent news</h2>
          <a href="#news" class="view-all">View all</a>
        </div>
        <ul class="news-list">
          <li>
            <a href="/helios">
              <span class="news-title">Helios enters design phase</span>
              <span class="news-meta">Projects · Sep 2026</span>
            </a>
          </li>
          <li>
            <a href="/helios">
              <span class="news-title">Open By Default announced</span>
              <span class="news-meta">Company · Aug 2026</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="more" class="section cta">
        <h2>Get involved.</h2>
        <p class="subtitle">Code is free; identity is not. GPLv3-or-later.</p>
        <a href="/helios" class="cta-link">Explore Helios</a>
      </section>
    </main>

    <footer>
      <div class="footer-row">
        <span>© 2026 Zero Labs</span>
        <span>GPLv3-or-later</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.landing { min-height: 100vh; display: flex; flex-direction: column; }

.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  height: 4rem;
  display: flex;
  align-items: center;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}
.header-row {
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand { display: flex; align-items: center; gap: 0.6rem; color: var(--fg); }
.brand-mark {
  font-weight: 700;
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.75rem; height: 1.75rem;
  border: 1.5px solid currentColor;
  border-radius: 0.55rem;
}
.brand-name { font-size: 1rem; font-weight: 600; letter-spacing: -0.01em; }
.nav { display: flex; gap: 1.5rem; }
.nav a { color: var(--fg-muted); font-size: 0.95rem; transition: color 0.15s; }
.nav a:hover { color: var(--fg); }

main { flex: 1; }

.hero {
  min-height: 90vh;
  display: flex; flex-direction: column; justify-content: center;
  max-width: 68rem; margin: 0 auto; padding: 8rem 2rem 4rem;
}
.hero h1 {
  font-size: clamp(3.5rem, 9vw, 7rem);
  line-height: 0.98; letter-spacing: -0.04em; font-weight: 600;
  margin-bottom: 2rem;
}
.hero-tag { color: var(--fg-muted); font-size: 0.95rem; margin-bottom: 1.5rem; }
.subtitle { color: var(--fg-muted); font-size: 1.15rem; max-width: 42ch; line-height: 1.6; }

.featured { max-width: 68rem; margin: 0 auto; padding: 4rem 2rem 6rem; }
.featured-card { display: block; }
.featured-media { border-radius: 1rem; overflow: hidden; border: 1px solid var(--border); margin-bottom: 1.5rem; }
.featured-media img { display: block; width: 100%; aspect-ratio: 16/9; object-fit: cover; }
.featured-body h2 { font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.03em; font-weight: 600; margin-bottom: 0.5rem; }

.eyebrow { color: var(--fg-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }
.read-time { color: var(--fg-muted); font-size: 0.9rem; }

.section { max-width: 68rem; margin: 0 auto; padding: 5rem 2rem; }
.section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 2.5rem; }
.section-head h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); letter-spacing: -0.02em; font-weight: 600; }
.view-all { color: var(--fg-muted); font-size: 0.95rem; }
.view-all:hover { color: var(--fg); }

.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)); gap: 1.5rem; }
.card { display: block; border: 1px solid var(--border); border-radius: 1rem; overflow: hidden; transition: border-color 0.2s; }
.card:hover { border-color: var(--fg-muted); }
.card-media img { display: block; width: 100%; aspect-ratio: 16/10; object-fit: cover; }
.card-body { padding: 1.5rem; }
.card-body h3 { font-size: 1.35rem; font-weight: 600; letter-spacing: -0.01em; margin-bottom: 0.4rem; }

.news-list { list-style: none; }
.news-list li { border-bottom: 1px solid var(--border); }
.news-list li:first-child { border-top: 1px solid var(--border); }
.news-list a {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: 1.5rem; padding: 1.5rem 0;
}
.news-title { font-size: 1.15rem; font-weight: 500; }
.news-meta { color: var(--fg-muted); font-size: 0.9rem; white-space: nowrap; }

.cta { text-align: center; padding-top: 8rem; padding-bottom: 8rem; }
.cta h2 { font-size: clamp(2.5rem, 6vw, 4rem); letter-spacing: -0.03em; font-weight: 600; margin-bottom: 1rem; }
.cta .subtitle { margin: 0 auto 2.5rem; }
.cta-link {
  display: inline-block; padding: 0.85rem 2rem; border-radius: 999px;
  background: var(--fg); color: var(--bg); font-weight: 500;
}
.cta-link:hover { opacity: 0.9; }

footer { border-top: 1px solid var(--border); padding: 2.5rem 2rem; }
.footer-row { max-width: 68rem; margin: 0 auto; display: flex; justify-content: space-between; color: var(--fg-muted); font-size: 0.9rem; }
</style>
