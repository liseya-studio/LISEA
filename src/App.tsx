import { useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Language = 'ru' | 'en'

const copy = {
  ru: {
    nav: ['Работы', 'Форматы', 'Контакты'],
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
    nav: ['Work', 'Formats', 'Contacts'],
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
  [5, 13, 18, -10], [21, 8, 15, 8], [39, 12, 17, -6], [60, 8, 18, 11], [78, 17, 16, -8],
  [12, 37, 16, 7], [29, 29, 19, -9], [48, 34, 17, 6], [68, 32, 19, -7], [85, 40, 14, 9],
  [3, 62, 17, -7], [21, 58, 18, 10], [42, 62, 16, -11], [60, 57, 20, 7], [81, 64, 17, -8],
  [13, 81, 16, 9], [34, 80, 18, -6], [54, 79, 17, 8], [74, 83, 18, -10], [91, 75, 13, 6],
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
        <path className="film-shadow" d="M1210 170 C1390 90 1430 310 1270 380 C1120 445 1010 270 1140 195 C1260 125 1350 290 1220 355 C1100 410 1040 260 1160 225 C1250 200 1290 300 1215 330 C1135 365 1100 270 1180 260 C1260 250 1310 450 1120 590 C950 720 1280 810 1170 980 C1060 1150 760 1030 680 1240 C590 1480 1100 1510 1000 1720 C910 1900 420 1780 390 2040 C360 2260 840 2300 720 2500 C650 2620 430 2580 300 2670" />
        <path className="film-ribbon" d="M1210 170 C1390 90 1430 310 1270 380 C1120 445 1010 270 1140 195 C1260 125 1350 290 1220 355 C1100 410 1040 260 1160 225 C1250 200 1290 300 1215 330 C1135 365 1100 270 1180 260 C1260 250 1310 450 1120 590 C950 720 1280 810 1170 980 C1060 1150 760 1030 680 1240 C590 1480 1100 1510 1000 1720 C910 1900 420 1780 390 2040 C360 2260 840 2300 720 2500 C650 2620 430 2580 300 2670" />
        <path className="film-perforations" d="M1210 170 C1390 90 1430 310 1270 380 C1120 445 1010 270 1140 195 C1260 125 1350 290 1220 355 C1100 410 1040 260 1160 225 C1250 200 1290 300 1215 330 C1135 365 1100 270 1180 260 C1260 250 1310 450 1120 590 C950 720 1280 810 1170 980 C1060 1150 760 1030 680 1240 C590 1480 1100 1510 1000 1720 C910 1900 420 1780 390 2040 C360 2260 840 2300 720 2500 C650 2620 430 2580 300 2670" />
      </svg>
      <div className="film-reel"><div className="reel-core"><span /><span /><span /></div><div className="reel-glint" /></div>
    </div>
  )
}

function HeroScene({ t }: { t: typeof copy.ru }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-collage" aria-hidden="true">
        {frames.map(([x, y, width, rotation], index) => (
          <div className="collage-frame" key={index} style={{ left: `${x}%`, top: `${y}%`, width: `${width}%`, transform: `rotate(${rotation}deg)` }}>
            <span className="collage-frame-index">{String(index + 1).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
      <h1 className="hero-wordmark">LISEA</h1>
      <div className="hero-bottom">
        <span>VIDEO EDITOR</span>
        <a href="#work" className="scroll-cue">{t.scroll} <span>↓</span></a>
        <span>{t.available}</span>
      </div>
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
      intro.from('.collage-frame', { y: 100, opacity: 0, rotate: 'random(-18,18)', scale: .72, stagger: .045, duration: 1 })
        .from('.hero-wordmark', { y: 35, opacity: 0, scale: .96, duration: 1.1 }, '+=.1')
      gsap.to(['.film-ribbon', '.film-perforations'], {
        strokeDashoffset: 0, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 },
      })
      gsap.to('.film-reel', { rotate: 520, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.5 } })
      gsap.to('.hero-collage', { yPercent: -12, scale: .94, opacity: .32, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
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
