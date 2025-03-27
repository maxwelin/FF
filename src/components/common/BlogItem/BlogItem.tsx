import styles from "./BlogItem.module.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogItem = ({ blogItem }: any) => {
  return (
    <Link to="/blog" className={styles.link}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src={blogItem.img} alt={blogItem.alt} />
        </div>
        <div className={styles.textContainer}>
          <h2>{blogItem.h2}</h2>
          <h3>{blogItem.h3}</h3>
          <p>{blogItem.text}</p>
        </div>
        <ChevronRight className={styles.chevron} size={80} />
      </div>
    </Link>
  );
};
export default BlogItem;
