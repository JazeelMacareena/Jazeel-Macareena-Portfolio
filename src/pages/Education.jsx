import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
// Stores the academic qualifications displayed in the education timeline.
const education=[
 {period:'2026 — PRESENT',degree:'Advanced Diploma · Software Engineering Technology',school:'Centennial College',location:'Toronto, Ontario',detail:'Current studies focused on software engineering, web application development and modern full-stack technologies.',gpa:'4.5 GPA'},
 {period:'2021 — 2025',degree:'B.E. · Computer Science & Engineering (Honours)',school:'Anna University',location:'Chennai, India',detail:'Computer science and engineering foundation with a final CGPA of 8.65.',gpa:'8.65 CGPA'}
];
// Stores professional certifications and training completed outside the degree programs.
const certs=['Segment Certified CDP Analyst — Twilio','AI Dashboard Using Microsoft Power BI — Skill Nation','Android App Development — National Small Industry Corporation (NSIC)'];
export default function Education(){return <section className="container page-section education-page"><SectionTitle eyebrow="EDUCATION" title={<>Learning by<br /><em>building.</em></>} text="The academic path behind my software development, data and delivery work."/>
 <ScrollReveal className="edu-feature"><div className="edu-current-copy"><span className="eyebrow light">CURRENTLY STUDYING</span><h2>Software Engineering<br/>Technology</h2><p>Centennial College · Toronto, Ontario</p></div><div className="edu-gpa"><strong>4.5</strong><span>GPA</span><small>Current program</small></div></ScrollReveal>
 <div className="education-timeline">{education.map((item,i)=><ScrollReveal className="edu-row" key={item.degree} delay={i*100}><div className="edu-period">{item.period}</div><div className="edu-dot"/><div className="edu-card"><div className="edu-card-top"><span>{item.location}</span><b>{item.gpa}</b></div><h2>{item.degree}</h2><h3>{item.school}</h3><p>{item.detail}</p></div></ScrollReveal>)}</div>
 <div className="cert-block"><div><span className="eyebrow">CERTIFICATIONS</span><h2>Always learning.<br/><em>Always building.</em></h2></div><div className="cert-list">{certs.map((c,i)=><ScrollReveal className="cert-item" key={c} delay={i*80}><span>{String(i+1).padStart(2,'0')}</span><p>{c}</p><b>↗</b></ScrollReveal>)}</div></div>
 </section>}
