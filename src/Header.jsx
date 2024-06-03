import { Link } from "react-scroll";
import styles from "./header.module.css";
import menu from "./assets/menu.png";
import close from "./assets/close.png";
export default function Header({ visible, setVisible }) {
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.nick}>
          <div className={styles.p}>P</div>
          <div className={styles.a}>a</div>
          <div className={styles.u}>U</div>
          <div className={styles.l}>L</div>
        </span>
        <div className={styles.header}>
          <div>
            {!visible ? (
              <img className={styles.menuIcon} src={menu} onClick={toggle} />
            ) : (
              <div className={styles.right}>
                <div>
                  <img
                    onClick={toggle}
                    className={styles.closeIcon}
                    src={close}
                  />
                </div>
                <Link to="home" smooth={true} offset={-170} duration={500}>
                  <div className={styles.list}>Home</div>
                </Link>

                <Link to="about" smooth={true} offset={-300} duration={500}>
                  <div className={styles.list}>About me</div>
                </Link>

                <Link to="services" smooth={true} offset={-300} duration={500}>
                  <div className={styles.list}>Services</div>
                </Link>

                <Link to="portfolio" smooth={true} offset={-300} duration={500}>
                  <div className={styles.list}>Portfolio</div>
                </Link>

                <Link to="contact" smooth={true} offset={-200} duration={500}>
                  <div className={styles.list}>Contact</div>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className={styles.response}>
          <Link to="home" smooth={true} offset={0} duration={500}>
            <div className={styles.other}>Home</div>
          </Link>

          <Link to="about" smooth={true} offset={-120} duration={500}>
            <div className={styles.other}>About me</div>
          </Link>

          <Link to="services" smooth={true} offset={-120} duration={500}>
            <div className={styles.other}>Services</div>
          </Link>

          <Link to="portfolio" smooth={true} offset={-120} duration={500}>
            <div className={styles.other}>Portfolio</div>
          </Link>

          <Link to="contact" smooth={true} offset={-120} duration={500}>
            <div className={styles.other}>Contact</div>
          </Link>
        </div>
      </div>
    </>
  );
}
