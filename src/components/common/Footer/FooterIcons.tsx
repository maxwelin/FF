import styles from "./Footer.module.css";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const FooterIcons = () => {
  return (
    <div className={styles.iconContainer}>
      <Facebook className={styles.icon} />
      <Instagram className={styles.icon} />
      <Youtube className={styles.icon} />
      <Linkedin className={styles.icon} />
    </div>
  );
};
export default FooterIcons;
