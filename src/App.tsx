import { useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Language = 'ru' | 'en'

const copy = {
  ru: {
    nav: ['Портфолио', 'Услуги', 'Контакты'],
    scroll: 'ЛИСТАЙТЕ ВНИЗ',
    introLabel: 'МОЙ ПОДХОД',
    introTitle: <>У каждого видео<br />есть свой <span>ритм.</span></>,
    introText: 'Нахожу точный визуальный язык для каждой истории — от короткого вертикального ролика до большого выпуска. Работаю с монтажом, звуком и деталями.',
    directions: 'НАПРАВЛЕНИЯ',
    workTitle: <>ЧТО Я<br /><em>МОНТИРУЮ.</em></>,
    workNote: <>Разные форматы.<br />Внимание к каждой детали.</>,
    discuss: 'ОБСУДИТЬ ПРОЕКТ',
    preview: 'ВИДЕОПРЕВЬЮ',
    contactLabel: 'ЕСТЬ ИДЕЯ?',
    contactTitle: <>ДАВАЙТЕ<br /><em>СОЗДАДИМ.</em></>,
    footer: 'НЕЗАВИСИМЫЙ ВИДЕОМОНТАЖЁР',
    available: 'ОТКРЫТА К ПРОЕКТАМ',
    categories: [
      ['КОРОТКИЕ ВИДЕО', 'Reels, Shorts и TikTok — динамично и по делу.', 'REELS · SHORTS · TIKTOK'],
      ['ДЛИННЫЕ ВИДЕО', 'YouTube, обзоры и большие истории.', 'YOUTUBE · ОБЗОРЫ · ИСТОРИИ'],
      ['ПОДКАСТЫ', 'Полные выпуски и короткие содержательные нарезки.', 'ВЫПУСКИ · НАРЕЗКИ'],
      ['КРЕАТИВ', 'Эдиты, реклама и эксперименты с визуальным языком.', 'ЭДИТЫ · РЕКЛАМА · ЭКСПЕРИМЕНТЫ'],
    ],
  },
  en: {
    nav: ['Portfolio', 'Services', 'Contacts'],
    scroll: 'SCROLL TO EXPLORE',
    introLabel: 'MY APPROACH',
    introTitle: <>Every video<br />has its own <span>rhythm.</span></>,
    introText: 'I find the right visual language for every story — from a short vertical video to a long-form feature. Editing, sound and details, all in balance.',
    directions: 'DIRECTIONS',
    workTitle: <>WHAT I<br /><em>EDIT.</em></>,
    workNote: <>Different formats.<br />Attention to every detail.</>,
    discuss: 'LET’S TALK ABOUT YOUR PROJECT',
    preview: 'VIDEO PREVIEW',
    contactLabel: 'HAVE AN IDEA?',
    contactTitle: <>LET’S MAKE<br /><em>IT HAPPEN.</em></>,
    footer: 'INDEPENDENT VIDEO EDITOR',
    available: 'AVAILABLE FOR PROJECTS',
    categories: [
      ['SHORT FORM', 'Reels, Shorts and TikTok — dynamic and to the point.', 'REELS · SHORTS · TIKTOK'],
      ['LONG FORM', 'YouTube videos, reviews and bigger stories.', 'YOUTUBE · REVIEWS · STORIES'],
      ['PODCASTS', 'Full episodes and concise, engaging cutdowns.', 'FULL EPISODES · CUTDOWNS'],
      ['CREATIVE', 'Edits, ads and experiments with visual language.', 'EDITS · ADS · EXPERIMENTS'],
    ],
  },
}

const frames = [
  {
    "x": 0,
    "y": 5,
    "w": 25,
    "h": 16,
    "layer": 0,
    "src": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 18,
    "y": 4,
    "w": 24,
    "h": 17,
    "layer": 0,
    "src": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 39,
    "y": 5,
    "w": 24,
    "h": 17,
    "layer": 0,
    "src": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 62,
    "y": 4,
    "w": 25,
    "h": 16,
    "layer": 0,
    "src": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 82,
    "y": 7,
    "w": 23,
    "h": 16,
    "layer": 0,
    "src": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 2,
    "y": 25,
    "w": 30,
    "h": 21,
    "layer": 1,
    "src": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 25,
    "y": 23,
    "w": 28,
    "h": 20,
    "layer": 1,
    "src": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 48,
    "y": 24,
    "w": 30,
    "h": 20,
    "layer": 1,
    "src": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 74,
    "y": 24,
    "w": 29,
    "h": 20,
    "layer": 1,
    "src": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 0,
    "y": 47,
    "w": 28,
    "h": 20,
    "layer": 2,
    "src": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 19,
    "y": 44,
    "w": 34,
    "h": 25,
    "layer": 2,
    "src": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 43,
    "y": 43,
    "w": 34,
    "h": 25,
    "layer": 2,
    "src": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 70,
    "y": 45,
    "w": 31,
    "h": 21,
    "layer": 2,
    "src": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 1,
    "y": 68,
    "w": 27,
    "h": 20,
    "layer": 1,
    "src": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 24,
    "y": 67,
    "w": 28,
    "h": 20,
    "layer": 1,
    "src": "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 47,
    "y": 66,
    "w": 29,
    "h": 20,
    "layer": 1,
    "src": "https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 72,
    "y": 67,
    "w": 29,
    "h": 20,
    "layer": 1,
    "src": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 10,
    "y": 82,
    "w": 26,
    "h": 17,
    "layer": 0,
    "src": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 39,
    "y": 81,
    "w": 27,
    "h": 17,
    "layer": 0,
    "src": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=75"
  },
  {
    "x": 69,
    "y": 81,
    "w": 27,
    "h": 17,
    "layer": 0,
    "src": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=75"
  }
]

function FilmArtwork() {
  return (
    <div className="film-art" aria-hidden="true">
      <svg className="film-path" viewBox="0 0 1440 2700" preserveAspectRatio="none">
        <defs>
          <linearGradient id="film-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6d321e" /><stop offset=".22" stopColor="#d17a43" />
            <stop offset=".48" stopColor="#8d492b" /><stop offset=".7" stopColor="#e49a5d" /><stop offset="1" stopColor="#71351f" />
          </linearGradient>
          <filter id="film-shadow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="13" /></filter>
        </defs>
        <path className="film-shadow" d="M1108 350 C1045 410 1012 476 1058 536 C1108 600 1230 585 1260 680 C1290 780 1110 850 1035 950 C950 1065 1035 1180 1135 1265 C1250 1365 1190 1490 1060 1570 C900 1665 800 1780 860 1900 C920 2020 1070 2090 1010 2220 C950 2350 740 2440 650 2570 C590 2650 500 2670 410 2700" />
        <path className="film-ribbon" d="M1108 350 C1045 410 1012 476 1058 536 C1108 600 1230 585 1260 680 C1290 780 1110 850 1035 950 C950 1065 1035 1180 1135 1265 C1250 1365 1190 1490 1060 1570 C900 1665 800 1780 860 1900 C920 2020 1070 2090 1010 2220 C950 2350 740 2440 650 2570 C590 2650 500 2670 410 2700" />
        <path className="film-perforations" d="M1108 350 C1045 410 1012 476 1058 536 C1108 600 1230 585 1260 680 C1290 780 1110 850 1035 950 C950 1065 1035 1180 1135 1265 C1250 1365 1190 1490 1060 1570 C900 1665 800 1780 860 1900 C920 2020 1070 2090 1010 2220 C950 2350 740 2440 650 2570 C590 2650 500 2670 410 2700" />
        <path className="film-edge-left" d="M1108 350 C1045 410 1012 476 1058 536 C1108 600 1230 585 1260 680 C1290 780 1110 850 1035 950 C950 1065 1035 1180 1135 1265 C1250 1365 1190 1490 1060 1570 C900 1665 800 1780 860 1900 C920 2020 1070 2090 1010 2220 C950 2350 740 2440 650 2570 C590 2650 500 2670 410 2700" />
        <path className="film-edge-right" d="M1108 350 C1045 410 1012 476 1058 536 C1108 600 1230 585 1260 680 C1290 780 1110 850 1035 950 C950 1065 1035 1180 1135 1265 C1250 1365 1190 1490 1060 1570 C900 1665 800 1780 860 1900 C920 2020 1070 2090 1010 2220 C950 2350 740 2440 650 2570 C590 2650 500 2670 410 2700" />
      </svg>
      <div className="film-reel">
        <div className="reel-backplate" />
        <div className="reel-winding" />
        <div className="reel-holes">{Array.from({ length: 8 }, (_, index) => (
          <span key={index} style={{ transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateY(-390%)` }} />
        ))}</div>
        <div className="reel-hub"><span /></div>
        <div className="reel-glint" />
      </div>
    </div>
  )
}

function HeroScene({ t }: { t: typeof copy.ru }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-collage" aria-hidden="true">
        {frames.map((frame, index) => (
          <div className={`collage-frame collage-layer-${frame.layer}`} key={index}
            style={{ left: `${frame.x}%`, top: `${frame.y}%`, width: `${frame.w}%`, height: `${frame.h}%`, backgroundImage: `linear-gradient(180deg, rgba(5,8,12,.05), rgba(5,8,12,.25)), url("${frame.src}")` }} />
        ))}
      </div>
      <h1 className="hero-wordmark">LISEA</h1>
      <div className="hero-bottom"><a href="#work" className="scroll-cue">{t.scroll} <span>↓</span></a></div>
    </section>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>('ru')
  const t = copy[language]

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.from('.collage-layer-0', { y: 35, opacity: 0, scale: .96, stagger: .045, duration: .65 })
        .from('.collage-layer-1', { y: 42, opacity: 0, scale: .94, stagger: .055, duration: .65 }, '-=.35')
        .from('.collage-layer-2', { y: 50, opacity: 0, scale: .92, stagger: .065, duration: .7 }, '-=.3')
        .from('.hero-wordmark', { y: 35, opacity: 0, scale: .96, duration: 1.1 }, '+=.1')
      gsap.to(['.film-ribbon', '.film-perforations', '.film-edge-left', '.film-edge-right'], {
        strokeDashoffset: 0, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 },
      })
      gsap.to('.film-reel', { rotate: 520, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.5 } })
      gsap.to('.collage-layer-0', { yPercent: -32, xPercent: -8, opacity: .2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.collage-layer-1', { yPercent: 38, xPercent: 9, opacity: .3, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.collage-layer-2', { yPercent: 68, scale: .9, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.utils.toArray<HTMLElement>('.category-card').forEach((card) => {
        gsap.from(card.querySelectorAll('.category-info, .media-placeholder'), {
          y: 55, opacity: 0, duration: .9, stagger: .15, ease: 'power3.out',
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
        <nav className="main-nav" aria-label={language === 'ru' ? 'Основная навигация' : 'Main navigation'}>
          <a href="#work">{t.nav[0]}</a><a href="#services">{t.nav[1]}</a><a href="#contact">{t.nav[2]}</a>
        </nav>
        <button className="language-switch" type="button" onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')} aria-label={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}>
          {language === 'ru' ? 'EN' : 'RU'}
        </button>
      </header>

      <HeroScene t={t} />

      <section className="intro section-pad" id="services">
        <p className="eyebrow">{t.introLabel}</p>
        <div className="intro-layout"><h2>{t.introTitle}</h2><p>{t.introText}</p></div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">{t.directions}</p><h2>{t.workTitle}</h2></div>
          <p className="section-note">{t.workNote}</p>
        </div>
        <div className="category-list">
          {t.categories.map((category, index) => (
            <article className={`category-card category-${['warm', 'light', 'dark', 'orange'][index]}`} key={index}>
              <div className="category-info">
                <span className="category-index">{category[2]}</span>
                <h3>{category[0]}</h3><p>{category[1]}</p>
                <a href="#contact" className="text-link">{t.discuss} <span>↗</span></a>
              </div>
              <div className="media-placeholder" aria-label={t.preview}>
                <div className="media-frame"><span className="media-label">LISEA / WORK IN MOTION</span><span className="media-play">↗</span><span className="media-caption">{t.preview}</span></div>
                <span className="media-counter">{String(index + 1).padStart(2, '0')} / 04 — {language === 'ru' ? 'ИЗБРАННОЕ' : 'SELECTED WORKS'}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2>
        <a className="contact-link" href="mailto:hello@lisea.studio">{t.discuss} <span>↗</span></a>
        <footer className="site-footer"><a className="wordmark" href="#top">LISEA<span>®</span></a><span>{t.footer}</span><span>© LISEA 2026</span></footer>
      </section>
    </main>
  )
}

export default App
