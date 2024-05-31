import styles from "./service.module.css";
export default function Service() {
  return (
    <>
      <div id="services" className={styles.service}>
        <h3>My Services</h3>
        <div className={styles.render}>
          <div className={styles.each}>
            <h4>01</h4>
            <h5> Website Development</h5>
            <p>
              Designing and developing responsive and visually appealing
              websites.
            </p>
          </div>

          <div className={styles.each}>
            <h4>02</h4>
            <h5> Web Application Development</h5>
            <p>
              Building interactive and dynamic web applications using framework
              like React.
            </p>
          </div>

          <div className={styles.each}>
            <h4>03</h4>
            <h5> Responsive Design</h5>
            <p>
              Developing websites that works seemlessly across various devices
              and screen sizes.
            </p>
          </div>

          <div className={styles.each}>
            <h4>04</h4>
            <h5> Maintainance And Update </h5>
            <p>
              Regularly updating website content and code. Fixing bugs and
              implementing new features as needed.
            </p>
          </div>

          <div className={styles.each}>
            <h4>05</h4>
            <h5> Collaboration</h5>
            <p>
              Working with backend developers and other stakeholders to ensure
              project success.
            </p>
          </div>

          <div className={styles.each}>
            <h4>06</h4>
            <h5> UI/UX Design</h5>
            <p>
              Creating user interface (UI) designs and user experience (UX)
              workflows. Implementing design principles to enhance user
              interactions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
