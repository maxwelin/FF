import Logotype from "../Header/Logotype";
import styles from "./Footer.module.css";
import FooterIcons from "./FooterIcons";
import FooterUl from "./FooterUl";

const Footer = () => {
  const year = new Date().getFullYear();

  const menuItems = ["Klättring", "Kajak", "Snöskovandring", "Blogg", "Om oss"];
  const kontaktItems = [
    "FriluftsFärder AB",
    "Äventyrsvägen 12",
    "123 45 Äventyrsstad",
    "Sverige",
    "Jobba hos oss",
  ];
  const supportItems = [
    "+46 12 345 67 89",
    "friluftsfärder@email.se",
    "Användarvillkor",
    "Säkerhetspolicy",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.topContainer} ${styles.container}`}>
        <Logotype />
        <FooterUl title="Meny" items={menuItems} />
        <FooterUl title="Kontakt" items={kontaktItems} />
        <FooterUl title="Support" items={supportItems} />
        <p>Nyhetbrev placeholder</p>
      </div>
      <div className={`${styles.bottomContainer} ${styles.container}`}>
        <p>© {year} FriluftsFärder AB</p>
        <FooterIcons />
        <p>Button placeholder</p>
      </div>
    </div>
  );
};
export default Footer;
