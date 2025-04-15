import { useEffect, useState } from "react";
import styles from "./ActivityPage.module.css";
import { Link } from "react-router-dom";

const ActivityHero = ({ activity }: any) => {
  const { img, loadingImg, h1, h2, h3 } = activity;

  useEffect(() => {
    setLoading(true);
    console.log("loading...");
  }, [activity]);

  const [loading, setLoading] = useState(true);

  const setLoadingState = () => {
    setLoading(false);
    console.log("loading complete");
  };

  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = img;

    if (imgElement.complete) {
      setLoading(false);
      console.log("image already loaded from cache");
    }
  }, [img]);

  return (
    <>
      <div className={styles.imgContainer}>
        {loading && <img src={loadingImg} />}

        <img
          src={img}
          alt={`${h1} image`}
          loading="eager"
          onLoad={setLoadingState}
          style={{ display: loading ? "none" : "block" }}
        />
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <h1>{h1}</h1>
            <h2 className={styles.heroText}>{h2}</h2>
            <h3 className={styles.heroText}>
              {h3}&nbsp;
              <Link className={styles.blogLink} to={"/blog"}>
                Läs mer
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActivityHero;
