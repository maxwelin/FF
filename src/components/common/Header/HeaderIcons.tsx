import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import signUpStyles from "./SignUp.module.css";
import { User, Heart, X } from "lucide-react";
import { ActivityContext } from "../../Providers/ActivityContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import LoginForm from "./LogInForm";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { toast, Slide } from "react-toastify";
import SignUp from "./SignUp";
import { UserContext } from "../../Providers/UserContext";

const HeaderIcons = () => {
  const { favoriteList }: any = useContext(ActivityContext);

  const { loggedIn, setLoggedIn, register, setRegister }: any =
    useContext(UserContext);

  const listRef = useRef(null);

  const [modal, setModal] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    setRegister(false);
  };

  const handleClickOutside = (event: any) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setToggleFavorite(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false);
      setModal(false);
      toast.success(`Användaren är utloggad.`, {
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
    } catch (error: any) {
      console.error("Fel vid utloggning:", error.message);
    }
  };

  useEffect(() => {
    if (toggleFavorite) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleFavorite]);

  const toggleFavoritesList = () => {
    if (favoriteList.length > 0) {
      setToggleFavorite(!toggleFavorite);
    } else {
      toast.error(`Inga favoriter sparade`, {
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
    }
  };

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
          <ul ref={listRef} className={`${styles.favoriteList} ${styles.list}`}>
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
      {loggedIn ? (
        <User className={styles.icon} onClick={toggleModal} fill={"#black"} />
      ) : (
        <User className={styles.icon} onClick={toggleModal} />
      )}

      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modalContent}>
            {register && (
              <>
                <h2>Registrera</h2>
                <SignUp />
                <X
                  size={32}
                  className={styles.closeModal}
                  onClick={toggleModal}
                />
              </>
            )}
            {!loggedIn && !register && (
              <>
                <h2>Logga in</h2>
                <LoginForm setModal={setModal} />
                <X
                  size={32}
                  className={styles.closeModal}
                  onClick={toggleModal}
                />
              </>
            )}
            {loggedIn && (
              <>
                <h2>
                  Här finns inte mycket <br /> man kan göra..
                </h2>
                <br />
                <br />
                <button
                  className={`${signUpStyles.cta} ${signUpStyles.register}`}
                  onClick={handleLogout}
                >
                  Logga ut
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderIcons;
