import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Fake async
    await new Promise((r) => setTimeout(r, 700))
    setStatus('Thanks! We will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">Start a project</h2>
          <p className="mt-1 text-blue-200/80">Tell us a bit about your game idea.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" required />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Email or Discord" type="email" required />
            <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Describe your project goals" />
            <button className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,0.35)] transition hover:brightness-110">Send inquiry</button>
            {status && <p className="text-sm text-blue-200/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
