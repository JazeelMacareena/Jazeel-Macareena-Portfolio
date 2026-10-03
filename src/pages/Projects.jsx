import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';

const projects = [
  { title:'Manufacturing Production Tracking & Analytics Portal', type:'Full-stack web application', description:'A secure production portal for a Tier 2 automotive CNC machining manufacturer, combining login, live production tracking, results dashboards and individual performance analysis.', role:'Built and deployed end-to-end and continued production maintenance.', tags:['React','Node.js','Express','Dashboard','Production'], theme:'project-dark', image:'/assets/projects/manufacturing.svg', accent:'Live production system' },
  { title:'Product Sales Dashboard', type:'Data analytics & visualization', description:'A business intelligence dashboard integrating Snowflake and Salesforce data to surface sales trends, pipeline movement and actionable performance insights through Power BI and Tableau.', role:'Led dashboard creation, data integration and reporting design.', tags:['Power BI','Tableau','Snowflake','Salesforce'], theme:'project-light', image:'/assets/projects/sales-dashboard.svg', accent:'Data to decisions' },
  { title:'KeyLock Pro', type:'Desktop application', description:'A cross-platform security application built with Python, PyQt5 and MySQL that monitors keystrokes, detects anomalies and enforces real-time system locks.', role:'Developed the desktop application and its data layer.', tags:['Python','PyQt5','MySQL','Security'], theme:'project-sage', image:'/assets/projects/keylock.svg', accent:'Security workflow' },
  { title:'Grocery Website', type:'MERN stack web application', description:'A feature-rich grocery platform built across MongoDB, Express, React and Node.js, connecting the interface to an API-driven backend and persistent data layer.', role:'Full-stack web application development.', tags:['MongoDB','Express','React','Node.js'], theme:'project-sand', image:'/assets/projects/grocery.svg', accent:'Full-stack commerce' }
];

export default function Projects(){
 return <section className="container page-section projects-page">
   <SectionTitle eyebrow="PROJECTS" title={<>Built for the web,<br /><em>built to work.</em></>} text="A selection of software, web and data projects — shown with the technical thinking behind each one."/>
   <div className="project-list">
    {projects.map((p,i)=><ScrollReveal className={`project-feature ${p.theme}`} key={p.title} delay={i*70}>
      <div className="project-art-wrap">
        <div className="project-index"><span>{p.type}</span><i /></div>
        <div className="project-art"><img src={p.image} alt={`${p.title} project visual`} /></div>
        <div className="project-art-caption"><span>{p.accent}</span><span className="project-art-arrow">↗</span></div>
      </div>
      <div className="project-copy">
        <div className="project-meta"><span>{p.type}</span><span>Project</span></div>
        <h2>{p.title}</h2>
        <p>{p.description}</p>
        <div className="project-role"><span>ROLE</span><p>{p.role}</p></div>
        <div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
      </div>
    </ScrollReveal>)}
   </div>
 </section>;
}
