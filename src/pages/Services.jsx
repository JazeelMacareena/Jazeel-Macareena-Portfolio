import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';

const services=[
 ['Web Development','Responsive React interfaces, reusable components and full-stack web experiences.','React · JavaScript · CSS'],
 ['Backend & APIs','Node.js and Express APIs, routing, validation and database-connected application logic.','Node.js · Express · REST'],
 ['Database & Data','MongoDB and SQL data layers, integrations and analytics-ready structures.','MongoDB · SQL · Snowflake'],
 ['Business Systems','Requirements, process analysis and solution design that connect the product to the real problem.','Analysis · Systems · CRM'],
 ['Project Delivery','Scope, milestones, stakeholder communication and cross-functional coordination.','Planning · Delivery · QA'],
 ['Dashboards & Analytics','KPI dashboards and reporting that turn operational data into clear decisions.','Power BI · Tableau · Analytics']
];

export default function Services(){return <section className="container page-section services-page">
 <SectionTitle eyebrow="SERVICES" title={<>What I build,<br /><em>and how I help.</em></>} text="Web development is the centre of my work. My systems, data and project experience gives every build more context."/>
 <div className="services-grid">{services.map(([title,text,stack],i)=><ScrollReveal className={`service-tile ${i===0?'service-primary':''}`} key={title} delay={i*50}>
   <div className="service-top"><span className="service-symbol">{['⌁','⌘','◈','◎','↗','▦'][i]}</span></div>
   <div className="service-content"><span className="eyebrow">{i===0?'PRIMARY SERVICE':'CAPABILITY'}</span><h2>{title}</h2><p>{text}</p></div>
   <div className="service-bottom"><small>{stack}</small><span>↗</span></div>
 </ScrollReveal>)}</div>
 <ScrollReveal className="services-cta"><div><span className="eyebrow light">LET’S BUILD</span><h2>Have a web idea?<br /><em>Let’s make it real.</em></h2></div><Link className="btn btn-light" to="/contact">Start a conversation <span>↗</span></Link></ScrollReveal>
 </section>}
