import { themes } from '../themes'

export default function Hero() {
  const scrollToFirst = () => {
    document.getElementById(themes[0].id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="landing-hero" id="top">
      <div className="landing-hero__inner">
        <div className="landing-hero__badge">
          10 design themes · Ready to copy
        </div>

        <h1 className="landing-hero__headline">
          Find your startup's
          <br />
          <span className="landing-hero__gradient">design language.</span>
        </h1>

        <p className="landing-hero__sub">
          Browse curated design themes used by the world's best startups.
          <br />
          Copy the prompt. Ship your landing page.
        </p>

        <div className="landing-hero__actions">
          <button className="landing-hero__cta" onClick={scrollToFirst}>
            Explore Themes
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </button>
        </div>

        <div className="landing-hero__themes-preview">
          {themes.map((t) => (
            <button
              key={t.id}
              className="theme-chip"
              style={{ '--accent': t.accentColor, '--bg': t.bgColor }}
              onClick={() => document.getElementById(t.id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="theme-chip__dot" style={{ background: t.accentColor }} />
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Decorative grid */}
      <div className="landing-hero__grid" aria-hidden="true" />
    </section>
  )
}
