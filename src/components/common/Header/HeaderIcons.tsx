import { useContext, useRef } from "react";
import styles from "./Header.module.css";
import { User, Heart } from "lucide-react";
import { ActivityContext } from "../../Providers/ActivityContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const HeaderIcons = () => {
  const { favoriteList }: any = useContext(ActivityContext);

  const handleClick = () => {
    if (favoriteList.length < 1) {
      return;
    } else favoriteListRef.current;
    favoriteListRef.current.classList.toggle(styles.visible);
  };

  const favoriteListRef = useRef(null);

  return (
    <div className={styles.iconContainer}>
      <SearchBar />
      <div className={styles.heartIconContainer} onClick={handleClick}>
        <Heart />
        {favoriteList.length > 0 ? (
          <div className={styles.favorite}>{favoriteList.length}</div>
        ) : (
          <></>
        )}
      </div>
      <ul
        className={`${styles.favoriteList} ${styles.list}`}
        ref={favoriteListRef}
      >
        {favoriteList.map((activity: any) => (
          <Link
            key={activity.id}
            className={styles.link}
            to={`/booking/${activity.id}`}
            onClick={handleClick}
          >
            <li
              key={activity.id}
              className={`border-0 mh-[45px] box-border p-4 ${styles.searchListItem}`}
            >
              {activity.name}
            </li>
          </Link>
        ))}
      </ul>
      <User className={styles.icon} />
    </div>
  );
};
export default HeaderIcons;
