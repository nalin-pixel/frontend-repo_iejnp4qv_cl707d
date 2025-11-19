import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(37,99,235,0.25),transparent_70%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_80%_at_10%_10%,rgba(99,102,241,0.15),transparent_60%)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Projects />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-blue-200/70">© {new Date().getFullYear()} PlayBaseStudio — All rights reserved.</p>
            <div className="text-sm text-blue-200/70">Made for Roblox creators</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
