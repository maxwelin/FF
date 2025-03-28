import { useParams } from "react-router";
import BlogItem from "../common/BlogItem/BlogItem";
import { useContext, useEffect } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import { Main } from "../BookingComponents/Main";
import Description from "../BookingComponents/Description";

const Booking = () => {
  const { id } = useParams();
  const { blogItems, activities }: any = useContext(ActivityContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const foundActivity: any = Object.values(activities)
    .flat()
    .find((activity: any) => activity.id === id);

  const similairActivities = Object.values(activities)
    .flat()
    .filter(
      (activity: any) =>
        activity.category === foundActivity.category &&
        activity.id !== foundActivity.id
    )
    .slice(0, 2);

  return (
    <>
      <Main activity={foundActivity} />
      <Description
        activity={foundActivity}
        similairActivities={similairActivities}
      />
      <BlogItem blogItem={blogItems[0]} />
    </>
  );
};
export default Booking;
