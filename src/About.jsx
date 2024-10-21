import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <div id="about" className={styles.about}>
        <h3>About Me</h3>
        <div className={styles.text} >
        <p>
          {" "}
          I&#39;m a frontend developer with over three years experienced creating
          responsive and user friendly web applications. Specializing
          in HTML, CSS, JavaScript and React.js.{" "}
        </p>
        <p>
          My passion for frontend development is not only reflected in my
          extensive experience but also in the enthusiasm and dedication i bring
          to each project.
        </p>
        <p>
          I&#39;m a fourth-year Computer Science Student at Ladoke Akintola
          University Of Technology, and i continually updates my skill set
          through online courses.
        </p>
        </div>

        <div className={styles.range}>
          <div className={styles.lan}>
            HTML & CSS <hr style={{ width: "58%" }} />{" "}
          </div>
          <div className={styles.lan}>
            
            JavaScript <hr style={{ width: "55%" }} />{" "}
          </div>
          <div className={styles.lan}>
            {" "}
            React JS <hr style={{ width: "60%" }} />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
