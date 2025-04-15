import { Link } from "react-router-dom";
import styles from "./BlogPage.module.css";
import { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={styles.blogPageContainer}>
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.h2}>Hoppsan</h2>
            <h1 className={styles.h1}>
              Sidan du försöker nå är under konstruktion...
            </h1>
            <Link to="/" className={styles.link}>
              Klicka <strong>här</strong> så hjälper vi dig tillbaka
            </Link>
          </div>
        </div>
        <img
          src="/assets/construction.png"
          alt="Image of a construction site"
        />
      </div>
    </>
  );
};
export default BlogPage;
