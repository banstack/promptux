import CopyButton from './CopyButton'

export default function ThemeSection({ theme, index }) {
  return (
    <section
      className={`theme-section theme--${theme.style}`}
      id={theme.id}
      style={{
        '--bg': theme.bgColor,
        '--text': theme.textColor,
        '--subtext': theme.subtextColor,
        '--accent': theme.accentColor,
        '--card-bg': theme.cardBg,
        '--border': theme.borderColor,
        '--font-heading': theme.fontHeading,
        '--font-body': theme.fontBody,
        background: theme.bgColor,
        color: theme.textColor,
        fontFamily: theme.fontBody,
      }}
    >
      <div className="theme-section__inner">
        {/* Index badge */}
        <div className="theme-index" style={{ color: theme.accentColor, borderColor: theme.borderColor }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>0{index + 1}</span>
        </div>

        {/* Hero content */}
        <div className="theme-hero">
          <div className="theme-hero__text">
            <div className="theme-badge" style={{ background: theme.cardBg, color: theme.accentColor, borderColor: theme.borderColor }}>
              {theme.typicallyUsed.split(',')[0].trim()}
            </div>

            <h2 className="theme-name" style={{ color: theme.textColor, fontFamily: theme.fontHeading }}>
              {theme.name}
            </h2>

            <p className="theme-tagline" style={{ color: theme.accentColor, fontFamily: theme.fontHeading }}>
              {theme.tagline}
            </p>

            <p className="theme-description" style={{ color: theme.subtextColor }}>
              {theme.description}
            </p>

            <div className="theme-meta" style={{ borderColor: theme.borderColor }}>
              <div className="theme-meta__item">
                <span className="theme-meta__label" style={{ color: theme.subtextColor }}>Origin</span>
                <span className="theme-meta__value" style={{ color: theme.textColor }}>{theme.origin}</span>
              </div>
              <div className="theme-meta__item">
                <span className="theme-meta__label" style={{ color: theme.subtextColor }}>Used by</span>
                <span className="theme-meta__value" style={{ color: theme.textColor }}>{theme.typicallyUsed}</span>
              </div>
            </div>

            {/* Font callout */}
            <div className="theme-font-note" style={{ background: theme.cardBg, borderColor: theme.borderColor, color: theme.subtextColor }}>
              <span className="theme-font-note__icon" style={{ color: theme.accentColor }}>Aa</span>
              <span className="theme-font-note__text">
                <strong style={{ color: theme.textColor, fontFamily: theme.fontHeading }}>
                  {theme.fontHeading.split(',')[0].replace(/'/g, '')}
                  {theme.fontBody !== theme.fontHeading && (
                    <> + {theme.fontBody.split(',')[0].replace(/'/g, '')}</>
                  )}
                </strong>
                {' — '}{theme.fontNote}
              </span>
            </div>

            <CopyButton
              prompt={theme.prompt}
              accentColor={theme.accentColor}
              style={theme.style}
            />
          </div>

          {/* Prompt Preview Card */}
          <div className="theme-preview" style={{ background: theme.cardBg, borderColor: theme.borderColor }}>
            <div className="theme-preview__header" style={{ borderColor: theme.borderColor }}>
              <div className="theme-preview__dots">
                <span style={{ background: '#ff5f57' }} />
                <span style={{ background: '#febc2e' }} />
                <span style={{ background: '#28c840' }} />
              </div>
              <span className="theme-preview__label" style={{ color: theme.subtextColor, fontFamily: 'JetBrains Mono, monospace' }}>
                design-prompt.txt
              </span>
            </div>
            <div className="theme-preview__body">
              <p style={{ color: theme.subtextColor, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', lineHeight: 1.7, wordBreak: 'break-word' }}>
                {theme.prompt.length > 320 ? theme.prompt.slice(0, 320) + '…' : theme.prompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
