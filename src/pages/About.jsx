import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';

const capabilities = ['React interfaces', 'Node & Express APIs', 'MongoDB data layers', 'Responsive UI systems', 'Requirements analysis', 'Project delivery'];
export default function About() {
  return <section className="container page-section about-page">
    <SectionTitle eyebrow="ABOUT ME" title={<>A web developer with<br /><em>systems thinking.</em></>} text="I enjoy building the interface and understanding everything behind it — the users, the data, the workflow and the delivery." />
    <div className="about-layout">
      <ScrollReveal className="about-photo-card"><img src="/assets/jazeel-photo.webp" alt="Jazeel Macareena P" /><div><span>JAZEEL MACAREENA P</span><strong>WEB DEVELOPER</strong></div></ScrollReveal>
      <ScrollReveal className="about-story" delay={100}>
        <span className="eyebrow">THE SHORT VERSION</span><h2>I build useful digital products, not just attractive screens.</h2>
        <p>I’m a Software Engineering Technology student at Centennial College with professional experience across software systems, data, CRM implementations and project delivery.</p>
        <p>My strongest interest is web development: creating clean React interfaces, building Express/Node backends, working with databases and connecting the pieces into a reliable product.</p>
        <div className="capability-grid">{capabilities.map((item, i) => <div key={item}><span>✦</span><strong>{item}</strong></div>)}</div>
        <div className="button-row"><a className="btn btn-dark" href="/assets/Jazeel-Macareena-Resume.pdf" target="_blank" rel="noreferrer">View resume ↗</a><Link className="arrow-link" to="/contact">Work with me <span>→</span></Link></div>
      </ScrollReveal>
    </div>
  </section>;
}
