import { processSteps } from '@/data/portfolio'
import { revealDelay } from '@/hooks/useReveal'

export default function Process() {
  return (
    <section className="border-y border-blue-100 bg-blue-50/40">
      <div className="shell py-20 lg:py-28">
        <div className="reveal max-w-2xl">
          <p className="section-label text-blue-700">04 / Como eu trabalho</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#0a1633] sm:text-4xl">
            Do problema ao{' '}
            <em className="font-serif-display font-normal italic text-blue-700">monitoramento.</em>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0a1633]/65">
            Assumo o ciclo completo com decisões técnicas conectadas ao objetivo do produto.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <li
              key={step.number}
              className="reveal relative rounded-2xl border border-blue-100 bg-white p-6 sm:p-7"
              style={revealDelay(i * 100)}
            >
              <span className="font-serif-display text-4xl italic text-blue-600">{step.number}</span>
              <h3 className="font-display mt-4 text-lg font-bold text-[#0a1633]">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#0a1633]/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
