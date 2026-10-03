import { Link } from 'react-router-dom';
// Defines the navigation links displayed in the website footer.
const navigation = [['Home','/'],['About Me','/about'],['Projects','/projects'],['Education','/education'],['Services','/services'],['Contact Me','/contact']];
// Lists the main technical areas highlighted in the footer.
const expertise = ['Web Development','Backend & APIs','Database & Data'];

export default function Footer(){
 return <footer className="site-footer">
  <div className="footer-orbit footer-orbit-one" />
  <div className="container footer-main">
   <div className="footer-cta">
    <div className="footer-cta-copy"><span className="footer-kicker">LET’S BUILD SOMETHING USEFUL</span><h2>Good ideas deserve <em>good interfaces.</em></h2><div className="footer-tech-line"><span>WEB DEVELOPMENT</span><i>·</i><span>REACT</span><i>·</i><span>APIs</span><i>·</i><span>DATA</span></div></div>
    <div className="footer-cta-action"><Link className="footer-circle" to="/contact" aria-label="Go to contact form">↗</Link></div>
   </div>
   <div className="footer-navigation">
    <div className="footer-nav-block"><span className="footer-nav-title">Main Menu</span><div className="footer-link-grid footer-menu-blocks">{navigation.map(([label,href])=><Link key={href} to={href}>{label}<span>↗</span></Link>)}</div></div>
    <div className="footer-nav-block"><span className="footer-nav-title">What I work with</span><div className="footer-expertise">{expertise.map(item=><span key={item}>{item}</span>)}</div></div>
    <div className="footer-nav-block footer-connect-block"><span className="footer-nav-title">Connect</span><a href="mailto:jpeterje@my.centennialcollege.ca">jpeterje@my.centennialcollege.ca <span>↗</span></a><a href="https://linkedin.com/in/jazeelmacareena" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><Link className="footer-resume" to="/contact">Start a project <span>↗</span></Link></div>
   </div>
   <div className="footer-bottom">
    <span className="footer-copyright">© {new Date().getFullYear()} Jazeel Macareena P</span>
    <span className="footer-build">React · Express · MongoDB</span>
   </div>
  </div>
 </footer>
}
