import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.35),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-100/90">
              Roblox Game Studio
              <span className="h-1 w-1 rounded-full bg-blue-400/70" />
              Modern • Playful • Interactive
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              PlayBaseStudio
            </h1>
            <p className="mt-4 max-w-xl text-blue-100/90">
              We design and build polished Roblox experiences—from concept to launch.
              Our team blends gameplay, world-building, and monetization to create
              games players love coming back to.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,0.35)] transition hover:brightness-110"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                See Our Work
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-blue-200/80">
              <div>
                <div className="text-2xl font-bold text-white">50M+</div>
                <div className="text-xs">lifetime plays</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-xs">average rating</div>
              </div>
            </div>
          </div>

          {/* 3D Spline scene */}
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 via-transparent to-indigo-500/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
