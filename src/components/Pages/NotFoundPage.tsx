import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import Header from "../common/Header/Header";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className={styles.notFoundContainer}>
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.h2}>404</h2>
            <h1 className={styles.h1}>
              Hoppsan, det ser ut som du har vandrat vilse...
            </h1>
            <Link to="/" className={styles.link}>
              Klicka <strong>här</strong> så hjälper vi dig tillbaka
            </Link>
          </div>
        </div>
        <img
          src="/assets/404.png"
          alt="Picture of a person in the wilderness"
        />
      </div>
    </>
  );
};
export default NotFoundPage;
