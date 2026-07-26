import { experience } from '@/data/portfolio'
import { revealDelay } from '@/hooks/useReveal'

export default function Experience() {
  return (
    <section id="experiencia" className="shell py-20 lg:py-28">
      <div className="reveal max-w-2xl">
        <p className="section-label text-blue-700">01 / Experiência</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[#0a1633] sm:text-4xl">
          Trajetória que virou <em className="font-serif-display font-normal italic text-blue-700">produto.</em>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[#0a1633]/65">
          Experiência prática em software, infraestrutura e suporte transformada em soluções que
          resolvem gargalos reais de operação.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {experience.map((job, i) => (
          <article
            key={job.company}
            className="reveal rounded-2xl border border-blue-100 bg-white p-6 transition-shadow hover:shadow-[0_16px_48px_-20px_rgba(30,64,175,0.22)] sm:p-8"
            style={revealDelay(i * 100)}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="section-label text-[11px] text-[#0a1633]/40">{job.period}</p>
                <h3 className="font-display mt-2 text-xl font-bold text-[#0a1633]">{job.title}</h3>
                <p className="mt-0.5 text-[15px] text-[#0a1633]/55">{job.company}</p>
              </div>
              {job.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[12px] font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Atual
                </span>
              )}
            </div>
            <ul className="mt-5 space-y-2.5">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-[#0a1633]/65">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
