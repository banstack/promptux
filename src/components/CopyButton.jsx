import { useState } from 'react'

export default function CopyButton({ prompt, accentColor, style }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea')
      el.value = prompt
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const isDark = ['dark', 'terminal', 'neon'].includes(style)

  return (
    <button
      onClick={handleCopy}
      className="copy-btn"
      style={{
        '--accent': accentColor,
        background: copied ? accentColor : 'transparent',
        borderColor: accentColor,
        color: copied ? (isDark ? '#000' : '#fff') : accentColor,
      }}
      aria-label="Copy design prompt to clipboard"
    >
      <span className="copy-btn-icon">
        {copied ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </span>
      {copied ? 'Prompt Copied!' : 'Copy My Prompt'}
    </button>
  )
}
