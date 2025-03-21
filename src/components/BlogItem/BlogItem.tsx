import styles from "./BlogItem.module.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  h2: string;
  h3: string;
  img: string;
  alt: string;
  text: string;
}

const BlogItem = ({ h2, h3, img, alt, text }: Props) => {
  return (
    <Link to="/blog" className={styles.link}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src={img} alt={alt} />
        </div>
        <div className={styles.textContainer}>
          <h2>{h2}</h2>
          <h3>{h3}</h3>
          <p>{text}</p>
        </div>
        <ChevronRight className={styles.chevron} size={80} />
      </div>
    </Link>
  );
};
export default BlogItem;
