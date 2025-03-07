import styles from "./Header.module.css";

const NavItem = ({ anchor }: { anchor: string }) => {
  return <a href="">{anchor}</a>;
};

const navbarItems = ["Klättring", "Kajak", "Snöskovandring", "Blogg", "Om oss"];

const Nav = () => {
  return (
    <div className={styles.navbar}>
      {navbarItems.map((item) => (
        <NavItem anchor={item} />
      ))}
    </div>
  );
};

export default Nav;
