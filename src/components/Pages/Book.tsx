import { useParams } from "react-router";
import BlogItem from "../common/BlogItem/BlogItem";
import { useContext } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import { Main } from "../BookComponents/Main";
import Description from "../BookComponents/Description";

const Book = () => {
  const { id } = useParams();
  const { blogItems, activities }: any = useContext(ActivityContext);

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
export default Book;
