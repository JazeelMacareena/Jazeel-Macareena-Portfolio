import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const roles = [
  ['Web Developer', 'React · Node.js · Express · MongoDB'],
  ['Business Systems Analyst', 'Requirements · systems · data'],
  ['Project Manager', 'Planning · delivery · collaboration']
];

const marqueeItems = ['WEB DEVELOPMENT', 'REACT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'UI SYSTEMS', 'FULL-STACK'];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-grid-lines" />
      <div className="hero-glow" />
      <div className="hero-tech-tag hero-tech-tag-c">BUILD · SHIP · REFINE</div>
      <div className="hero-orbit hero-orbit-a" />
      <div className="hero-orbit hero-orbit-b" />
      <div className="hero-cross hero-cross-a">+</div>
      <div className="hero-cross hero-cross-b">+</div>
      <div className="hero-scanline" />
      <div className="container hero-layout">
        <ScrollReveal className="hero-content">
          <div className="hero-kicker"><span className="live-dot" /> WEB DEVELOPER · TORONTO</div>
          <h1>I design and build <span>web experiences</span> that feel <em>intentional.</em></h1>
          <p className="hero-lead">I’m Jazeel Macareena P — a web developer who enjoys turning ideas into responsive interfaces, connected applications and useful digital products.</p>
          <div className="hero-actions"><Link className="btn btn-light" to="/projects">Explore my work <span>↗</span></Link><Link className="hero-text-link" to="/about">More about me <span>→</span></Link></div>
          <div className="hero-role-row">
            {roles.map(([title, detail]) => <div className="hero-role" key={title}><span>{title}</span><small>{detail}</small></div>)}
          </div>
        </ScrollReveal>

        <ScrollReveal className="hero-photo-area" delay={120} direction="right">
          <div className="photo-orbit orbit-one" /><div className="photo-orbit orbit-two" /><div className="photo-orbit orbit-three" />
          <div className="photo-frame"><div className="frame-corner" /><img src="/assets/jazeel-photo.webp" alt="Jazeel Macareena P" /></div>
          
        </ScrollReveal>
      </div>
      <div className="scroll-cue"><span>SCROLL</span><i /></div>
    </section>

    <section className="role-band" aria-label="Core capabilities">
      <div className="marquee-track">
        {[0,1].map(copy => <div className="marquee-copy" key={copy}>{marqueeItems.map((item, index) => <span key={`${copy}-${item}`}>{item}<b>✦</b></span>)}</div>)}
      </div>
    </section>

    <section className="container intro-section">
      <ScrollReveal className="intro-side"><span className="eyebrow">WHAT I BRING</span><span className="side-line" /></ScrollReveal>
      <ScrollReveal className="intro-main" delay={80}>
        <h2>From a blank canvas to a working product — <em>I like being close to the build.</em></h2>
        <p>I work across interface design, frontend development and backend integration, with business analysis and project delivery experience helping me understand the problem behind the product.</p>
        <Link className="arrow-link" to="/services">See what I can build <span>↗</span></Link>
      </ScrollReveal>
    </section>

    <section className="studio-strip">
      <div className="container studio-grid">
        <ScrollReveal className="studio-intro">
          <span className="eyebrow">THE BUILD LOOP</span>
          <h2>Think it. <em>Build it.</em> Refine it.</h2>
          <p>I bring together interface development, APIs, data and product thinking so the experience works from the first screen to the last request.</p>
          <Link className="arrow-link" to="/projects">See selected projects <span>↗</span></Link>
        </ScrollReveal>
        <div className="studio-steps" aria-label="Build process">
          <ScrollReveal className="studio-step" delay={80}>
            <span className="studio-step-icon">✦</span>
            <div className="studio-step-copy"><b>Interface</b><small>React · UI systems</small></div>
            <span className="studio-step-arrow">↗</span>
          </ScrollReveal>
          <ScrollReveal className="studio-step" delay={150}>
            <span className="studio-step-icon">↗</span>
            <div className="studio-step-copy"><b>Connect</b><small>Node · Express · APIs</small></div>
            <span className="studio-step-arrow">↗</span>
          </ScrollReveal>
          <ScrollReveal className="studio-step" delay={220}>
            <span className="studio-step-icon">◇</span>
            <div className="studio-step-copy"><b>Deliver</b><small>MongoDB · deployment</small></div>
            <span className="studio-step-arrow">↗</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </>;
}
