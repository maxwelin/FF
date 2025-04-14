import { useContext } from "react";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";
import { ActivityContext } from "../Providers/ActivityContext";
import { Star, StarHalf } from "lucide-react";

const Reviews = ({ activity }: any) => {
  const { reviewRef }: any = useContext(ActivityContext);

  const isEven = (rating: number): boolean => {
    return rating % 1 == 0;
  };

  return (
    <div className="ml-[10%] w-[59%] h-auto flex flex-col" ref={reviewRef}>
      <div className="flex flex-row">
        <div>
          <h3 className="mb-2">Kundrecensioner</h3>
          <p className={styles.gray}>{activity.rating[1]} recensioner</p>
        </div>
        <div className="ml-auto flex flex-col justify-between">
          <div className="h-[29px] box-border mb-2">
            <Star size={30} color="#FFD700" fill="#FFD700" />
            <Star size={30} color="#FFD700" fill="#FFD700" />
            <Star size={30} color="#FFD700" fill="#FFD700" />
            <Star size={30} color="#FFD700" fill="#FFD700" />
            <StarHalf size={30} color="#FFD700" fill="#FFD700" />
          </div>
          <p className={`${styles.gray} box-border`}>
            {isEven(activity.rating[0]) ? (
              <span className={styles.gray}>
                {activity.rating[0]}.0 · {activity.rating[1]} recensioner
              </span>
            ) : (
              <span>
                {activity.rating[0]} · {activity.rating[1]} recensioner
              </span>
            )}
          </p>
        </div>
      </div>
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
        rating={5}
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
        rating={5}
        comment={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ullam quo sint delectus nam debitis unde neque maxime perferendis. Harum numquam amet nihil perferendis illo non dolores nesciunt omnis similique dolore ad, aspernatur ex quia."
        }
        backgroundColor={"f8f8f8"}
      />
      <ReviewCard
        img={"/assets/james.png"}
        name={"James Maverick"}
        date={"17 jan 2025, 09:31"}
        rating={5}
        comment={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem numquam necessitatibus minus. Amet dolorem iusto fugiat suscipit autem hic?"
        }
        backgroundColor={"white"}
      />
    </div>
  );
};
export default Reviews;
