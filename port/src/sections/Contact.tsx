import { profile } from '@/data/portfolio'

export default function Contact() {
  return (
    <>
      <section id="contato" className="shell py-20 lg:py-28">
        <div className="reveal overflow-hidden rounded-3xl bg-[#0a1633] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20">
          <p className="section-label text-blue-300">05 / Contato</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
            Tem um produto para tirar do papel ou{' '}
            <em className="font-serif-display font-normal italic text-blue-300">evoluir?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/55">
            Estou disponível para oportunidades Full Stack, produtos SaaS, integrações, automações e
            IA aplicada.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#0a1633] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Enviar e-mail
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[15px] font-medium text-white/80 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
            >
              Ver GitHub ↗
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/40">
            {['Português nativo', 'Inglês técnico', 'Remoto ou híbrido', 'Viagens pontuais'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-3">
                {item}
                {i < arr.length - 1 && <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-blue-100">
        <div className="shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <div className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#0a1633]">
            <span className="font-display flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-[11px] font-bold text-white">
              IN
            </span>
            Iury Nascimento
          </div>
          <p className="text-sm text-[#0a1633]/50">Construído com intenção, código e café. © 2026</p>
          <a href="#top" className="text-sm text-[#0a1633]/50 transition-colors hover:text-blue-700">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </>
  )
}
