import { projects } from '@/data/portfolio'
import { revealDelay } from '@/hooks/useReveal'

export default function Projects() {
  return (
    <section id="projetos" className="border-y border-blue-100 bg-blue-50/40">
      <div className="shell py-20 lg:py-28">
        <div className="reveal max-w-2xl">
          <p className="section-label text-blue-700">02 / Projetos selecionados</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#0a1633] sm:text-4xl">
            Cases com contexto, código e{' '}
            <em className="font-serif-display font-normal italic text-blue-700">resultado.</em>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0a1633]/65">
            Produtos desenvolvidos para operações reais, com diferentes desafios de escala,
            integração e experiência do usuário.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`reveal group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white transition-all hover:border-blue-200 hover:shadow-[0_20px_56px_-20px_rgba(30,64,175,0.28)] ${
                i === projects.length - 1 ? 'md:col-span-2' : ''
              }`}
              style={revealDelay((i % 2) * 90)}
            >
              <div className={`overflow-hidden ${i === projects.length - 1 ? 'md:max-h-72' : ''}`}>
                <img
                  src={project.image}
                  alt={`Arte conceitual do projeto ${project.title}`}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.labels.map((label) => (
                      <span
                        key={label}
                        className="rounded-full bg-blue-600/[0.08] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-800"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <span className="font-serif-display text-lg italic text-blue-200 transition-colors group-hover:text-blue-600">
                    {project.number}
                  </span>
                </div>

                <h3 className="font-display mt-4 text-xl font-bold text-[#0a1633]">{project.title}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-[#0a1633]/65">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-100 bg-blue-50/60 px-2.5 py-1 text-[12px] text-[#0a1633]/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
                  >
                    {project.link.text} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
