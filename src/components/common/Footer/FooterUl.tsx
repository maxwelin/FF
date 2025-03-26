import styles from "./Footer.module.css";

interface Props {
  title: string;
  items: string[];
}

const FooterUl = ({ title, items }: Props) => {
  return (
    <ul className={styles.ul}>
      <li className={styles.listTitle}>{title}</li>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default FooterUl;
