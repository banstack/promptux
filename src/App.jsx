import Nav from './components/Nav'
import Hero from './components/Hero'
import ThemeSection from './components/ThemeSection'
import { themes } from './themes'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {themes.map((theme, index) => (
          <ThemeSection key={theme.id} theme={theme} index={index} />
        ))}
      </main>
      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__logo">✦ Prompt UX</span>
          <p className="footer__copy">
            10 design themes. Infinite possibilities. Copy a prompt, build something great.
          </p>
        </div>
      </footer>
    </>
  )
}
