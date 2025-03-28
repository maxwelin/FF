import styles from "./Header.module.css";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
  link: string;
  route: string;
}

const NavItem = ({ link, route }: Props) => {
  const resolvedPath = useResolvedPath(route);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <NavLink
      to={route}
      className={`${styles.navItem} ${isActive ? styles.active : ""}`}
    >
      {link}
    </NavLink>
  );
};

const navbarItems = ["Klättring", "Kajak", "Snöskovandring", "Blogg", "Om oss"];
const navbarRoutes = [
  "/activity/climbing",
  "/activity/kayak",
  "/activity/snowshoes",
  "/blog",
  "/about",
];

const Nav = () => {
  return (
    <div className={styles.navbar}>
      {navbarItems.map((item, index) => (
        <NavItem link={item} key={index} route={navbarRoutes[index]} />
      ))}
    </div>
  );
};

export default Nav;
