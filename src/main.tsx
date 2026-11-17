import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, AtSign, Mail, Menu, Send, X } from 'lucide-react'
import './styles.css'

const projects = [
  { num: '01', title: 'In good company', kind: 'Brand platform', year: '2024', tone: 'blue' },
  { num: '02', title: 'Lumen / Notes', kind: 'Product experience', year: '2024', tone: 'orange' },
  { num: '03', title: 'Fieldwork', kind: 'Digital archive', year: '2023', tone: 'pink' },
]

function App() {
  const [open, setOpen] = useState(false)
  return <main>
    <nav className="nav">
      <a className="brand" href="#top">MM<span>®</span></a>
      <div className="nav-links">
        <a href="#work">Selected work</a><a href="#about">About</a><a href="#contact">Contact</a>
      </div>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      {open && <div className="mobile-nav"><a onClick={() => setOpen(false)} href="#work">Selected work</a><a onClick={() => setOpen(false)} href="#about">About</a><a onClick={() => setOpen(false)} href="#contact">Contact</a></div>}
    </nav>

    <section id="top" className="hero">
      <p className="eyebrow">Independent designer & developer <i /> Helsinki, Finland</p>
      <h1>Making <em>useful</em><br />things with<br />a point of view.</h1>
      <div className="hero-foot"><p>I help ideas find their shape — through identity, interface, and code.</p><a href="#work" className="round-link" aria-label="See selected work"><ArrowDownRight /></a></div>
      <div className="orbit orbit-one">◌</div><div className="orbit orbit-two">✳</div>
    </section>

    <section id="work" className="work section">
      <div className="section-head"><p className="eyebrow">01 — Selected work</p><p>Things made with good people.</p></div>
      <div className="project-list">{projects.map((project) => <article className="project" key={project.num}>
        <div className={`project-art ${project.tone}`}><span>{project.num}</span><div className="shape" /></div>
        <div className="project-meta"><div><p className="project-title">{project.title}</p><p>{project.kind}</p></div><div className="year">{project.year} <ArrowUpRight size={17} /></div></div>
      </article>)}</div>
      <a className="text-link" href="#contact">More projects on request <ArrowUpRight size={18}/></a>
    </section>

    <section id="about" className="about section">
      <p className="eyebrow">02 — About me</p>
      <div className="about-grid"><h2>A curious generalist working at the intersection of <em>culture</em> and technology.</h2><div><p>I’m Mithun — a designer and developer who enjoys getting close to the problem. I build expressive digital identities and clear, useful experiences for people and ideas I believe in.</p><p>Currently available for select freelance collaborations, product teams, and ambitious side projects.</p><a className="text-link" href="#contact">Let’s work together <ArrowUpRight size={18}/></a></div></div>
    </section>

    <section className="ticker" aria-label="Capabilities"><div>Strategy <b>✦</b> Art direction <b>✦</b> Digital design <b>✦</b> Front-end development <b>✦</b> Strategy <b>✦</b> Art direction <b>✦</b></div></section>

    <section id="contact" className="contact section">
      <p className="eyebrow">03 — Get in touch</p>
      <h2>Have a good idea?<br /><em>Let’s make it real.</em></h2>
      <a className="email" href="mailto:hello@mithunmunsi.com">hello@mithunmunsi.com <ArrowUpRight /></a>
      <footer><p>© {new Date().getFullYear()} Mithun Munsi</p><div><a href="https://linkedin.com" aria-label="LinkedIn"><AtSign size={18}/></a><a href="https://github.com" aria-label="GitHub"><Send size={18}/></a><a href="mailto:hello@mithunmunsi.com" aria-label="Email"><Mail size={18}/></a></div><p>Built with intention.</p></footer>
    </section>
  </main>
}
export default App

createRoot(document.getElementById('root')!).render(<App />)
