import { profile } from '@/data/portfolio'
import { revealDelay } from '@/hooks/useReveal'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${profile.heroTexture})` }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white" />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-3.5 py-1.5 text-[13px] font-medium text-blue-800">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Disponível para remoto ou híbrido
          </div>

          <p className="section-label mt-7 text-[#0a1633]/50">Full Stack Developer — SaaS · IA · Automação</p>

          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.04] text-[#0a1633] sm:text-5xl lg:text-[3.75rem]">
            Produtos que saem do backlog e aguentam{' '}
            <em className="font-serif-display font-normal italic text-blue-700">produção.</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#0a1633]/65">
            Sou Iury Nascimento. Transformo rotinas manuais e integrações complexas em software SaaS
            confiável, rastreável e útil para a operação — da arquitetura ao monitoramento e à
            correção de incidentes.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explorar projetos
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-[15px] font-medium text-blue-800 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
            >
              Baixar CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#0a1633]/55">
            <span>{profile.location}</span>
            <span className="h-1 w-1 rounded-full bg-blue-300" aria-hidden="true" />
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-blue-700">
              {profile.email}
            </a>
            <span className="h-1 w-1 rounded-full bg-blue-300" aria-hidden="true" />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-700"
            >
              {profile.githubUser} ↗
            </a>
          </div>
        </div>

        <aside className="reveal" style={revealDelay(120)}>
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_24px_64px_-24px_rgba(30,64,175,0.25)]">
            <img
              src={profile.photoPath}
              alt="Foto de Iury Nascimento"
              className="aspect-square w-full object-cover"
              loading="eager"
            />
            <div className="border-t border-blue-50 p-5">
              <p className="font-display text-lg font-bold text-[#0a1633]">{profile.name}</p>
              <p className="mt-0.5 text-sm text-[#0a1633]/55">
                {profile.role} — {profile.tagline}
              </p>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-[13px]">
                <span className="text-[#0a1633]/55">Ciclo completo</span>
                <span className="font-medium text-blue-800">Problema → Produção</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
