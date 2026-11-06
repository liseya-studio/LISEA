import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { id: 'short-form', title: 'SHORT FORM', subtitle: 'Короткие видео, которые удерживают внимание.', formats: 'REELS · SHORTS · TIKTOK', tone: 'warm', count: '01 / 04' },
  { id: 'long-form', title: 'LONG FORM', subtitle: 'Большие истории с точным ритмом и монтажной логикой.', formats: 'YOUTUBE · REVIEWS · STORIES', tone: 'light', count: '02 / 04' },
  { id: 'podcast', title: 'PODCAST', subtitle: 'Разговоры, которым хочется дослушать до конца.', formats: 'FULL EPISODES · CUTDOWNS', tone: 'dark', count: '03 / 04' },
  { id: 'creative', title: 'CREATIVE', subtitle: 'Эдиты, реклама и эксперименты с визуальным языком.', formats: 'EDITS · ADS · EXPERIMENTS', tone: 'orange', count: '04 / 04' },
]

const frames = [
  { className: 'frame-a', label: 'A MOMENT / 01' },
  { className: 'frame-b', label: 'IN BETWEEN / 02' },
  { className: 'frame-c', label: 'SOUND & MOTION / 03' },
  { className: 'frame-d', label: 'THE BIG PICTURE / 04' },
]

function FilmArtwork() {
  return (
    <div className="film-art" aria-hidden="true">
      <svg className="film-path" viewBox="0 0 1440 2700" preserveAspectRatio="none">
        <defs>
          <linearGradient id="film-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6d321e" />
            <stop offset=".22" stopColor="#d17a43" />
            <stop offset=".48" stopColor="#8d492b" />
            <stop offset=".7" stopColor="#e49a5d" />
            <stop offset="1" stopColor="#71351f" />
          </linearGradient>
          <filter id="film-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="13" />
          </filter>
        </defs>
        <path className="film-shadow" d="M1210 170 C1390 90 1430 310 1270 380 C1120 445 1010 270 1140 195 C1260 125 1350 290 1220 355 C1100 410 1040 260 1160 225 C1250 200 1290 300 1215 330 C1135 365 1100 270 1180 260 C1260 250 1310 450 1120 590 C950 720 1280 810 1170 980 C1060 1150 760 1030 680 1240 C590 1480 1100 1510 1000 1720 C910 1900 420 1780 390 2040 C360 2260 840 2300 720 2500 C650 2620 430 2580 300 2670" />
        <path className="film-ribbon" d="M1210 170 C1390 90 1430 310 1270 380 C1120 445 1010 270 1140 195 C1260 125 1350 290 1220 355 C1100 410 1040 260 1160 225 C1250 200 1290 300 1215 330 C1135 365 1100 270 1180 260 C1260 250 1310 450 1120 590 C950 720 1280 810 1170 980 C1060 1150 760 1030 680 1240 C590 1480 1100 1510 1000 1720 C910 1900 420 1780 390 2040 C360 2260 840 2300 720 2500 C650 2620 430 2580 300 2670" />
        <path className="film-perforations" d="M1210 170 C1390 90 1430 310 1270 380 C1120 445 1010 270 1140 195 C1260 125 1350 290 1220 355 C1100 410 1040 260 1160 225 C1250 200 1290 300 1215 330 C1135 365 1100 270 1180 260 C1260 250 1310 450 1120 590 C950 720 1280 810 1170 980 C1060 1150 760 1030 680 1240 C590 1480 1100 1510 1000 1720 C910 1900 420 1780 390 2040 C360 2260 840 2300 720 2500 C650 2620 430 2580 300 2670" />
      </svg>
      <div className="film-reel">
        <div className="reel-core"><span /><span /><span /></div>
        <div className="reel-glint" />
      </div>
    </div>
  )
}

function HeroScene() {
  return (
    <section className="hero" id="top">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-kicker"><span className="status-dot" /> INDEPENDENT VIDEO EDITOR</div>
      <div className="hero-copy">
        <p className="eyebrow">МОНТАЖ · РИТМ · ИСТОРИЯ</p>
        <h1>MAKE IT<br /><em>MOVE.</em></h1>
        <p className="hero-description">Собираю кадры в истории,<br />которые хочется смотреть.</p>
      </div>
      <div className="hero-collage" aria-hidden="true">
        {frames.map((frame, index) => (
          <div className={`collage-frame ${frame.className}`} key={frame.className}>
            <span className="collage-frame-index">0{index + 1}</span>
            <span className="collage-frame-label">{frame.label}</span>
            <span className="collage-frame-cross">+</span>
          </div>
        ))}
      </div>
      <div className="hero-bottom">
        <span>VIDEO EDITOR / LISEA</span>
        <a href="#work" className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></a>
        <span>AVAILABLE FOR PROJECTS</span>
      </div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
    </section>
  )
}

function App() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.from('.hero-kicker', { y: 14, opacity: 0, duration: .7 })
        .from('.hero-copy .eyebrow', { y: 18, opacity: 0, duration: .6 }, '-=.35')
        .from('.hero h1', { y: 70, opacity: 0, duration: 1.05 }, '-=.35')
        .from('.hero-description', { y: 20, opacity: 0, duration: .7 }, '-=.55')
        .from('.collage-frame', { y: 90, opacity: 0, rotate: 12, scale: .72, stagger: .12, duration: 1.1 }, '-=1.05')
        .from('.film-reel', { scale: .65, opacity: 0, rotate: -40, duration: 1.1 }, '-=1')

      gsap.to(['.film-ribbon', '.film-perforations'], {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      })

      gsap.to('.film-reel', {
        rotate: 520,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      })

      gsap.to('.hero-collage', {
        yPercent: -18,
        scale: .88,
        opacity: .2,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
      })

      gsap.utils.toArray<HTMLElement>('.category-card').forEach((card) => {
        gsap.from(card.querySelectorAll('.category-info, .media-placeholder'), {
          y: 55,
          opacity: 0,
          duration: .9,
          stagger: .15,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 82%', once: true },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main>
      <FilmArtwork />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="LISEA home">LISEA<span>®</span></a>
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#work">Работы</a>
          <a href="#services">Форматы</a>
          <a href="#contact">Контакт</a>
        </nav>
        <a className="language-switch" href="#contact">EN / RU</a>
      </header>

      <HeroScene />

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
          {categories.map((category) => (
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
                <span className="media-counter">{category.count} — SELECTED WORKS</span>
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
