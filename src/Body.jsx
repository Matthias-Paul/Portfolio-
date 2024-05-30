import styles from "./body.module.css";
import Hero from "./Hero"
import About from "./About"
import Service from "./Service"
import Project from "./Project"
import Contact from "./Contact" 
export default function Body ({visible}){
return(
<>
<div className={!visible?styles.none:styles.push}>
<Hero/>
<About/>
<Service/>
<Project/>
<Contact visible ={visible}/>
</div>

</>
)}