import { useContext } from "react";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";
import { ActivityContext } from "../Providers/ActivityContext";

const Reviews = ({ activity }: any) => {
  const { reviewRef } = useContext(ActivityContext);

  return (
    <div className="ml-[10%] mr-[10%] h-auto flex flex-col" ref={reviewRef}>
      <h3>Kundrecensioner</h3>
      <p className={styles.gray}>{activity.rating[1]} recensioner</p>
      <ReviewCard
        img={"/assets/sofia.png"}
        name={"Sofia Norén"}
        date={"5 feb 2025, 17:32"}
        rating={4}
        comment={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui! Doloremque possimus magnam eius vel reprehenderit commodi earum ratione aliquam, quam fugiat quos esse aspernatur in eum ipsum? Suscipit, fuga!"
        }
        backgroundColor={"white"}
      />
      <ReviewCard
        img={"/assets/alex.png"}
        name={"Alex Sjöberg"}
        date={"3 feb 2025, 12:15"}
        rating={3}
        comment={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla quisquam eaque fugiat officiis soluta quibusdam! Pariatur tempora non ipsum laboriosam beatae sequi neque unde minus, earum consectetur doloribus aspernatur aliquam expedita nobis et commodi blanditiis, eos quis repellendus quod?"
        }
        backgroundColor={"f8f8f8"}
      />
      <ReviewCard
        img={"/assets/johan.png"}
        name={"Johan Lindström"}
        date={"2 feb 2025, 16:49"}
        rating={4}
        comment={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor necessitatibus quis rem facilis, id consequatur dignissimos tempore magnam quia asperiores qui placeat voluptatem officia?"
        }
        backgroundColor={"white"}
      />
      <ReviewCard
        img={"/assets/hedda.png"}
        name={"Hedda Eriksson"}
        date={"21 jan 2025, 21:07"}
        rating={4}
        comment={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ullam quo sint delectus nam debitis unde neque maxime perferendis. Harum numquam amet nihil perferendis illo non dolores nesciunt omnis similique dolore ad, aspernatur ex quia."
        }
        backgroundColor={"f8f8f8"}
      />
      <ReviewCard
        img={"/assets/james.png"}
        name={"James Maverick"}
        date={"17 jan 2025, 09:31"}
        rating={4}
        comment={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem numquam necessitatibus minus. Amet dolorem iusto fugiat suscipit autem hic?"
        }
        backgroundColor={"white"}
      />
    </div>
  );
};
export default Reviews;
