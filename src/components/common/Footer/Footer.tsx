import { ChevronDown, Mail } from "lucide-react";
import Logotype from "../Header/Logotype";
import styles from "./Footer.module.css";
import FooterIcons from "./FooterIcons";
import FooterUl from "./FooterUl";
import { toast, Slide } from "react-toastify";

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("Tack för din prenumeration på vårt nyhetsbrev!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.topContainer} ${styles.container}`}>
        <Logotype />
        <FooterUl title="Meny" items={menuItems} />
        <FooterUl title="Kontakt" items={kontaktItems} />
        <FooterUl title="Support" items={supportItems} />
        <form onSubmit={handleSubmit} className={styles.newsletterContainer}>
          <p className={styles.listTitle}>Prenumerera på vårat nyhetsbrev</p>
          <label className={styles.emailLabel} htmlFor="email">
            Email
          </label>
          <input className={styles.emailInput} type="email" required></input>
          <button className={styles.submitBtn} type="submit">
            <Mail size={20} />
          </button>
        </form>
      </div>
      <div className={`${styles.bottomContainer} ${styles.container}`}>
        <p>© {year} FriluftsFärder AB</p>
        <FooterIcons />
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <select name="sortera">
              <option value="" disabled selected hidden>
                Language
              </option>
              <option value="2">...finns bara svenska än så länge</option>
              <option value="1">Svenska</option>
            </select>
            <ChevronDown className={styles.chevron} size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
