import { useParams } from "react-router";
import BlogItem from "../common/BlogItem/BlogItem";
import { useContext } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import { Main } from "../BookComponents/Main";
import Description from "../BookComponents/Description";

const Book = () => {
  const { id } = useParams();
  const { blogItems, activities } = useContext(ActivityContext);

  const activityValues = Object.values(activities).flat();

  const foundActivity = activityValues.find((obj: any) => obj.id === id);

  return (
    <>
      <Main activity={foundActivity} />
      <Description activity={foundActivity} />
      <BlogItem
        h2={blogItems[0].h2}
        h3={blogItems[0].h3}
        img={blogItems[0].img}
        alt={blogItems[0].alt}
        text={blogItems[0].text}
      />
    </>
  );
};
export default Book;
