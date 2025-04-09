import styles from "../../components/ActivityPageComponents/ActivityPage.module.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ActivityContext } from "../Providers/ActivityContext";
import ActivityHero from "../ActivityPageComponents/ActivityHero";
import ActivityCard from "../common/ActivityCard/ActivityCard";
import BlogItem from "../common/BlogItem/BlogItem";
import ActivityPageButtons from "../ActivityPageComponents/ActivityPageButtons";
import Loading from "../common/Loading/Loading";

interface ActivityObject {
  id: string;
  img: string;
  imgLoading: string;
  h2: string;
  h3: string;
  price: string;
  rating: [number, number];
}

const ActivityPage = () => {
  const { id }: any = useParams();
  const {
    climbingActivities,
    kayakActivities,
    snowshoesActivities,
    activities,
    sortedClimbingActivities,
    sortedKayakActivities,
    sortedSnowshoesActivities,
    blogItems,
  }: any = useContext(ActivityContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activitiesID =
    id === "climbing"
      ? climbingActivities
      : id === "kayak"
      ? kayakActivities
      : id === "snowshoes"
      ? snowshoesActivities
      : [];

  const sortedActivityBasedOnId =
    id === "climbing"
      ? sortedClimbingActivities
      : id === "kayak"
      ? sortedKayakActivities
      : id === "snowshoes"
      ? sortedSnowshoesActivities
      : [];

  const activityID =
    id === "climbing" ? 0 : id === "kayak" ? 1 : id === "snowshoes" ? 2 : 0;

  const blogID =
    id === "climbing" ? 1 : id === "kayak" ? 2 : id === "snowshoes" ? 3 : 0;

  console.log(activities, id);

  if (!activitiesID.length) {
    return <Loading />;
  }

  return (
    <>
      <ActivityHero activity={activities[activityID][0]} />
      <ActivityPageButtons activities={activitiesID} id={id} />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          {sortedActivityBasedOnId.length
            ? sortedActivityBasedOnId.map((activity: ActivityObject) => (
                <ActivityCard
                  key={activity.id}
                  id={activity.id}
                  img={activity.img}
                  h2={activity.h2}
                  h3={activity.h3}
                  price={activity.price}
                  rating={activity.rating}
                />
              ))
            : activitiesID.map((activity: ActivityObject) => (
                <ActivityCard
                  key={activity.id}
                  id={activity.id}
                  img={activity.img}
                  h2={activity.h2}
                  h3={activity.h3}
                  price={activity.price}
                  rating={activity.rating}
                />
              ))}
        </div>
      </div>
      <BlogItem blogItem={blogItems[blogID]} />
    </>
  );
};
export default ActivityPage;
