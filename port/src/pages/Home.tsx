import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Metrics from '@/sections/Metrics'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Stack from '@/sections/Stack'
import Process from '@/sections/Process'
import Contact from '@/sections/Contact'
import { useReveal } from '@/hooks/useReveal'

export default function Home() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Projects />
        <Stack />
        <Process />
        <Contact />
      </main>
    </div>
  )
}
