import styles from "./Header.module.css";

const NavItem = ({ anchor }: { anchor: string }) => {
  return (
    <a href="" className={styles.navItem}>
      {anchor}
    </a>
  );
};

const navbarItems = ["Klättring", "Kajak", "Snöskovandring", "Blogg", "Om oss"];

const Nav = () => {
  return (
    <div className={styles.navbar}>
      {navbarItems.map((item, index) => (
        <NavItem anchor={item} key={index} />
      ))}
    </div>
  );
};

export default Nav;
