
import styles from "./hero.module.css";
import pics from "./assets/paul.jpg";
export default function Hero() {

  return (
    <>
      <div id="home" className={styles.hero}>
        <div className={styles.image}>
          <img src={pics} />
        </div>
        <div className={styles.text}>
          <span className={styles.name}>I&#39;m Matthias Paul, </span>
          <span className={styles.dev}>frontend developer, based in Nigeria. </span>
          <p className={styles.paragraph}>
            I&#39;m frontend developer from Oyo state, Nigeria with four years of
            experience.
          </p>
      
        </div>
        <button className={styles.btn}>Connect with me</button>
      </div>
  
    </>
  );
}
