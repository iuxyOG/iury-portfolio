import { useEffect, useState } from 'react'
import { profile } from '@/data/portfolio'

const links = [
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-blue-100 bg-white/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between" aria-label="Navegação principal">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight text-[#0a1633]">
          <span className="font-display flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-[13px] font-bold text-white">
            IN
          </span>
          <span className="hidden sm:inline">Iury Nascimento</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-[#0a1633]/60 transition-colors hover:bg-blue-50 hover:text-[#0a1633]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-[#0a1633]/70 transition-colors hover:text-blue-700 sm:inline"
          >
            GitHub ↗
          </a>
          <a
            href="#contato"
            className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 md:block"
          >
            Falar comigo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-sm font-medium text-[#0a1633] md:hidden"
            aria-expanded={open}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-blue-100 bg-white px-5 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] text-[#0a1633]/75 transition-colors hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-lg px-3 py-2.5 text-[15px] font-medium text-blue-700"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
