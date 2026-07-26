import { metrics } from '@/data/portfolio'
import { revealDelay } from '@/hooks/useReveal'

export default function Metrics() {
  return (
    <section className="border-y border-blue-100 bg-white" aria-label="Resultados em destaque">
      <div className="shell grid grid-cols-2 divide-blue-100 py-10 sm:py-12 md:grid-cols-4 md:divide-x">
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            className="reveal flex flex-col items-center gap-1 px-4 py-3 text-center"
            style={revealDelay(i * 80)}
          >
            <span className="font-display text-3xl font-bold tabular-nums text-blue-700 sm:text-4xl">
              {metric.value}
            </span>
            <span className="text-sm text-[#0a1633]/55">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
