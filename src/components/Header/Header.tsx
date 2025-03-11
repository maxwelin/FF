import styles from "./Header.module.css";
import Icons from "./Icons";
import Logotype from "./Logotype";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logotype />
      <Navbar />
      <Icons />
    </header>
  );
};
export default Header;
