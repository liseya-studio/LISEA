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
    "y": 0,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 25,
    "y": 0,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 50,
    "y": 0,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 75,
    "y": 0,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 0,
    "y": 25,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 25,
    "y": 25,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 50,
    "y": 25,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 75,
    "y": 25,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 0,
    "y": 50,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 25,
    "y": 50,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 50,
    "y": 50,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 75,
    "y": 50,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 0,
    "y": 75,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 25,
    "y": 75,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 50,
    "y": 75,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 75,
    "y": 75,
    "w": 25,
    "h": 25,
    "layer": 0,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 10,
    "y": 15,
    "w": 20,
    "h": 0,
    "layer": 1,
    "ratio": "9 / 16",
    "src": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 30,
    "y": 20,
    "w": 34,
    "h": 0,
    "layer": 1,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 70,
    "y": 15,
    "w": 20,
    "h": 0,
    "layer": 1,
    "ratio": "9 / 16",
    "src": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 20,
    "y": 46,
    "w": 26,
    "h": 0,
    "layer": 1,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 56,
    "y": 47,
    "w": 26,
    "h": 0,
    "layer": 1,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "x": 34,
    "y": 32,
    "w": 32,
    "h": 0,
    "layer": 2,
    "ratio": "16 / 9",
    "src": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
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
        <path className="film-shadow" d="M1290 455 C1395 455 1460 505 1435 610 C1410 710 1270 725 1250 840 C1220 980 1390 1050 1320 1210 C1260 1360 1000 1370 990 1530 C980 1690 1270 1760 1160 1950 C1080 2100 790 2120 790 2310 C790 2460 580 2540 410 2700" />
        <path className="film-ribbon" d="M1290 455 C1395 455 1460 505 1435 610 C1410 710 1270 725 1250 840 C1220 980 1390 1050 1320 1210 C1260 1360 1000 1370 990 1530 C980 1690 1270 1760 1160 1950 C1080 2100 790 2120 790 2310 C790 2460 580 2540 410 2700" />
        <path className="film-perforations" d="M1290 455 C1395 455 1460 505 1435 610 C1410 710 1270 725 1250 840 C1220 980 1390 1050 1320 1210 C1260 1360 1000 1370 990 1530 C980 1690 1270 1760 1160 1950 C1080 2100 790 2120 790 2310 C790 2460 580 2540 410 2700" />
        <path className="film-edge-left" d="M1290 455 C1395 455 1460 505 1435 610 C1410 710 1270 725 1250 840 C1220 980 1390 1050 1320 1210 C1260 1360 1000 1370 990 1530 C980 1690 1270 1760 1160 1950 C1080 2100 790 2120 790 2310 C790 2460 580 2540 410 2700" />
        <path className="film-edge-right" d="M1290 455 C1395 455 1460 505 1435 610 C1410 710 1270 725 1250 840 C1220 980 1390 1050 1320 1210 C1260 1360 1000 1370 990 1530 C980 1690 1270 1760 1160 1950 C1080 2100 790 2120 790 2310 C790 2460 580 2540 410 2700" />
      </svg>
      <div className="film-reel"><img src="/LISEA/reel.svg" alt="" /></div>
    </div>
  )
}

function HeroScene() {
  return (
    <section className="hero" id="top">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-collage" aria-hidden="true">
        {frames.map((frame, index) => (
          <div className={`collage-frame collage-layer-${frame.layer}`} key={index}
            style={{ left: `${frame.x}%`, top: `${frame.y}%`, width: `${frame.w}%`, height: frame.layer === 0 ? `${frame.h}%` : 'auto', aspectRatio: frame.ratio, backgroundImage: `linear-gradient(180deg, rgba(5,8,12,.05), rgba(5,8,12,.25)), url("${frame.src}")` }} />
        ))}
      </div>
      <h1 className="hero-wordmark">LISEA</h1>
      
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
      intro.from('.collage-layer-0', { opacity: 0, scale: 1.015, stagger: .008, duration: .3 })
        .from('.collage-layer-1', { opacity: 0, scale: 1.035, stagger: .025, duration: .3 }, '-=.08')
        .from('.collage-layer-2', { opacity: 0, scale: 1.04, duration: .3 }, '-=.08')
        .from('.hero-wordmark', { y: 12, opacity: 0, duration: .35 }, '-=.08')
      gsap.to(['.film-ribbon', '.film-perforations', '.film-edge-left', '.film-edge-right'], {
        strokeDashoffset: 0, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 },
      })
      gsap.to('.film-reel img', { rotate: 520, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.5 } })
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

      <HeroScene />

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
