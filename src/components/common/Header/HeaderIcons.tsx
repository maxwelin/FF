import { useContext, useRef, useState } from "react";
import styles from "./Header.module.css";
import { User, Heart, X } from "lucide-react";
import { ActivityContext } from "../../Providers/ActivityContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const HeaderIcons = () => {
  const { favoriteList }: any = useContext(ActivityContext);

  const [modal, setModal] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleFavoritesList = () => {
    if (favoriteList.length > 0) setToggleFavorite(!toggleFavorite);
  };

  if (modal) {
    document.body.classList.add("activeModal");
  } else {
    document.body.classList.remove("activeModal");
  }

  return (
    <div className={styles.iconContainer}>
      <SearchBar />
      <div className={styles.heartIconContainer} onClick={toggleFavoritesList}>
        <Heart />
        {favoriteList.length > 0 && (
          <>
            <div className={styles.favorite}>{favoriteList.length}</div>
          </>
        )}
      </div>
      {toggleFavorite && favoriteList.length > 0 && (
        <>
          <div
            className={styles.overlayTransparent}
            onClick={toggleFavoritesList}
          ></div>
          <ul className={`${styles.favoriteList} ${styles.list}`}>
            {favoriteList.map((activity: any) => (
              <Link
                key={activity.id}
                className={styles.link}
                to={`/booking/${activity.id}`}
                onClick={toggleFavoritesList}
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
        </>
      )}
      <User className={styles.icon} onClick={toggleModal} />

      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modalContent}>
            <h2>Logga in</h2>
            <SignUp />
            <X size={32} className={styles.closeModal} onClick={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderIcons;
