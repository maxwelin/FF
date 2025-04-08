import { useParams } from "react-router";
import BlogItem from "../common/BlogItem/BlogItem";
import { useContext, useEffect } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import { Main } from "../BookingComponents/Main";
import Description from "../BookingComponents/Description";

const Booking = () => {
  const { id } = useParams();
  const {
    blogItems,
    climbingActivities,
    kayakActivities,
    snowshoesActivities,
  }: any = useContext(ActivityContext);

  const activities = [
    ...climbingActivities,
    ...kayakActivities,
    ...snowshoesActivities,
  ];

  const setBlogId = (id: string | undefined) => {
    const num = Number(id);
    if (num > 0 && num < 9) {
      return 1;
    } else if (num > 8 && num < 17) {
      return 2;
    } else {
      return 3;
    }
  };

  console.log(typeof id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const foundActivity: any = Object.values(activities).find(
    (activity: any) => activity.id === id
  );

  const similarActivities = Object.values(activities)
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
        similarActivities={similarActivities}
      />
      <BlogItem blogItem={blogItems[setBlogId(id)]} />
    </>
  );
};
export default Booking;
