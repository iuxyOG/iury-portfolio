import { practices, stackGroups } from '@/data/portfolio'
import { revealDelay } from '@/hooks/useReveal'

export default function Stack() {
  return (
    <section id="stack" className="shell py-20 lg:py-28">
      <div className="reveal max-w-2xl">
        <p className="section-label text-blue-700">03 / Stack</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[#0a1633] sm:text-4xl">
          Tecnologias que uso para{' '}
          <em className="font-serif-display font-normal italic text-blue-700">entregar.</em>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[#0a1633]/65">
          Uma stack pensada para construir rápido sem perder clareza, observabilidade ou capacidade
          de evolução.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group, i) => (
          <article
            key={group.title}
            className="reveal rounded-2xl border border-blue-100 bg-white p-6 transition-shadow hover:shadow-[0_16px_48px_-20px_rgba(30,64,175,0.22)]"
            style={revealDelay(i * 80)}
          >
            <span className="font-serif-display text-2xl italic text-blue-600">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display mt-3 text-[17px] font-bold text-[#0a1633]">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-blue-600/[0.07] px-2.5 py-1 text-[12px] text-[#0a1633]/70">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {practices.map((practice, i) => (
          <article
            key={practice.title}
            className="reveal rounded-2xl border border-dashed border-blue-200 p-6"
            style={revealDelay(i * 80)}
          >
            <h3 className="font-display text-[15px] font-bold text-[#0a1633]">{practice.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a1633]/65">{practice.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
