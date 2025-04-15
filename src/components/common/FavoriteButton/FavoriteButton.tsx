import { Heart } from "lucide-react";
import { useContext, useEffect } from "react";
import { ActivityContext } from "../../Providers/ActivityContext";
import { toast, Slide } from "react-toastify";
import styles from "./FavoriteButton.module.css";

interface Props {
  h2: string;
  id: string;
}

const FavoriteButton = ({ h2, id }: Props) => {
  const { favoriteList, setFavoriteList }: any = useContext(ActivityContext);

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

  const isFavorited = () => {
    let isFavorited = false;
    if (favoriteList)
      for (let i = 0; i < favoriteList.length; i++) {
        if (favoriteList[i].id === id) isFavorited = true;
      }
    return isFavorited;
  };

  const removeFavorite = (i: number) => {
    setFavoriteList(
      favoriteList.filter((_: any, index: number) => index !== i)
    );
  };

  const toggleFavorite = () => {
    let alreadyFavorited = false;
    for (let i = 0; i < favoriteList.length; i++) {
      const element = favoriteList[i];
      if (element.id === id) {
        alreadyFavorited = !alreadyFavorited;
        removeFavorite(i);
      }
    }
    if (!alreadyFavorited) {
      setFavoriteList([...favoriteList, { id: id, name: h2 }]);
      toast.success(`${h2} tillagd i dina favoriter!`, {
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
    <div className={styles.btnContainer} onClick={toggleFavorite}>
      {isFavorited() === false ? (
        <Heart className={styles.btn} />
      ) : (
        <Heart className={`${styles.btn} ${styles.favorited}`} />
      )}
    </div>
  );
};
export default FavoriteButton;
