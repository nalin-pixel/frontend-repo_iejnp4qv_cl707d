import { Gamepad2, Sparkles, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Gamepad2,
    title: 'Gameplay-first design',
    desc: 'We prototype quickly, test often, and tune mechanics for retention and fun.'
  },
  {
    icon: Sparkles,
    title: 'Striking worlds',
    desc: 'Crisp visual style, performant builds, and on-brand UI that feels premium.'
  },
  {
    icon: Users,
    title: 'Community growth',
    desc: 'Event loops, social systems, and analytics to grow and keep players engaged.'
  },
  {
    icon: Shield,
    title: 'Safety & compliance',
    desc: 'Best practices for Roblox safety, moderation, and monetization policies.'
  },
]

export default function Features() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_10%,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What we do</h2>
          <p className="mt-3 text-blue-200/80">End-to-end production for standout Roblox titles</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)]">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
