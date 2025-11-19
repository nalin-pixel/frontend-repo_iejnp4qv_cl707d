import { Star } from 'lucide-react'

const projects = [
  {
    title: 'Neon Drift',
    desc: 'Fast-paced hover racing with seasonal events.',
    stats: '12M plays',
  },
  {
    title: 'Sky Forge Tycoon',
    desc: 'Vertical factory builder with co-op systems.',
    stats: '9.3M plays',
  },
  {
    title: 'Pet Vault',
    desc: 'Collect, trade, and evolve adorable companions.',
    stats: '18M plays',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured projects</h2>
            <p className="mt-3 text-blue-200/80">A taste of the worlds we build</p>
          </div>
          <a href="#contact" className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 sm:inline-flex">Work with us</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/80">{p.stats}</span>
                <Star size={18} className="text-yellow-300/80" />
              </div>
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 ring-1 ring-white/10" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-blue-200/80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
