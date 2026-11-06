const categories = [
  {
    id: 'short-form',
    title: 'SHORT FORM',
    subtitle: 'Короткие видео, которые удерживают внимание.',
    formats: 'REELS · SHORTS · TIKTOK',
    tone: 'warm',
  },
  {
    id: 'long-form',
    title: 'LONG FORM',
    subtitle: 'Большие истории с точным ритмом и монтажной логикой.',
    formats: 'YOUTUBE · REVIEWS · STORIES',
    tone: 'light',
  },
  {
    id: 'podcast',
    title: 'PODCAST',
    subtitle: 'Разговоры, которым хочется дослушать до конца.',
    formats: 'FULL EPISODES · CUTDOWNS',
    tone: 'dark',
  },
  {
    id: 'creative',
    title: 'CREATIVE',
    subtitle: 'Эдиты, реклама и эксперименты с визуальным языком.',
    formats: 'EDITS · ADS · EXPERIMENTS',
    tone: 'orange',
  },
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="LISEA home">LISEA<span>®</span></a>
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#work">Работы</a>
          <a href="#services">Форматы</a>
          <a href="#contact">Контакт</a>
        </nav>
        <a className="language-switch" href="#contact">EN / RU</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-kicker"><span className="status-dot" /> INDEPENDENT VIDEO EDITOR</div>
        <div className="hero-copy">
          <p className="eyebrow">МОНТАЖ · РИТМ · ИСТОРИЯ</p>
          <h1>MAKE IT<br /><em>MOVE.</em></h1>
          <p className="hero-description">
            Собираю кадры в истории,<br />которые хочется смотреть.
          </p>
        </div>
        <div className="hero-bottom">
          <span>VIDEO EDITOR / LISEA</span>
          <a href="#work" className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></a>
          <span>AVAILABLE FOR PROJECTS</span>
        </div>
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      </section>

      <section className="intro section-pad" id="services">
        <p className="eyebrow">НЕ ПРОСТО СКЛЕИТЬ КАДРЫ</p>
        <div className="intro-layout">
          <h2>У каждого видео<br />есть свой <span>ритм.</span></h2>
          <p>Я помогаю найти его через монтаж, звук и детали. От короткого вертикального ролика до большого выпуска — с вниманием к задаче и характеру проекта.</p>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED DIRECTIONS</p>
            <h2>WHAT I<br /><em>EDIT.</em></h2>
          </div>
          <p className="section-note">Разные форматы.<br />Один подход к деталям.</p>
        </div>

        <div className="category-list">
          {categories.map((category, index) => (
            <article className={`category-card category-${category.tone}`} key={category.id}>
              <div className="category-info">
                <span className="category-index">{category.formats}</span>
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
                <a href="#contact" className="text-link">ОБСУДИТЬ ПРОЕКТ <span>↗</span></a>
              </div>
              <div className="media-placeholder" aria-label="Место для видеопревью портфолио">
                <div className="media-frame">
                  <span className="media-label">LISEA / WORK IN MOTION</span>
                  <span className="media-play">↗</span>
                  <span className="media-caption">ВИДЕОПРЕВЬЮ</span>
                </div>
                <span className="media-counter">0{index + 1} — 03</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>LET'S MAKE<br /><em>IT MOVE.</em></h2>
        <a className="contact-link" href="mailto:hello@lisea.studio">ОБСУДИТЬ ПРОЕКТ <span>↗</span></a>
        <footer className="site-footer">
          <a className="wordmark" href="#top">LISEA<span>®</span></a>
          <span>INDEPENDENT VIDEO EDITOR</span>
          <span>© LISEA 2026</span>
        </footer>
      </section>
    </main>
  )
}

export default App
