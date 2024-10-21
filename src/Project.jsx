import styles from "./project.module.css"
import cal from "./assets/cal.jpg"
import todo from "./assets/todos.jpg"
import food from "./assets/food.jpg"
import velot from "./assets/velot2.jpg"
import job from "./assets/job.jpg"
import sch from "./assets/school.jpg"
export default function Project() {
 const calculator = ()=>{
    window.location.href = "https://react-calculator-zeta-seven.vercel.app/"
 }
 const todos = ()=>{
    window.location.href = "https://todos-sage-nine.vercel.app/"
 }
 const foods = ()=>{
    window.location.href = "https://food-recipes-mocha.vercel.app/"
 }
 const jobs = ()=>{
    window.location.href = "https://my-react-job.vercel.app/"
 }
 const schs = ()=>{
    window.location.href = "https://uni-web-pearl.vercel.app/"
 }
 const velots = ()=>{
    window.location.href = "https://velot.vercel.app/"
 }


  return (
    <>
      <div id="portfolio" className={styles.project}>
       <h3>My Latest Work</h3> 
      <div className={styles.grid}>
      <img className={styles.image} onClick={calculator} src={cal} />
      <img className={styles.image} onClick={todos} src={todo} />
      <img className={styles.image} onClick={foods} src={food} />
      <img className={styles.image} onClick={velots} src={velot} />
      <img className={styles.image} onClick={jobs} src={job} />
      <img className={styles.image} onClick={schs} src={sch} />
   



      </div>










      </div>

    </>
  );
}
