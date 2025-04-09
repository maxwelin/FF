import { Star } from "lucide-react";
import styles from "./Reviews.module.css";

interface Props {
  img: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  backgroundColor: string;
}

const ReviewCard = ({
  img,
  name,
  date,
  rating,
  comment,
  backgroundColor,
}: Props) => {
  console.log(backgroundColor);
  return (
    <div
      className={`h-[110px] w-[75%] rounded-[50px] p-[15px] box-border bg-${backgroundColor} flex pr-[70px] overflow-hidden`}
    >
      <img
        className="min-h-[80px] min-w-[80px] object-cover rounded-[50%]"
        src={img}
        alt={`Photo of ${name}`}
      />

      <div className="flex flex-col justify-around pl-[5px] mr-[10px] min-w-[200px]">
        <div className="flex flex-row align-middle w-[80%]">
          {Array.from({ length: rating }).map(() => (
            <Star
              className="mr-[4px]"
              size={20}
              color="#FFD700"
              fill="#FFD700"
            />
          ))}
        </div>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.date}>{date}</p>
      </div>
      <p>{comment}</p>
    </div>
  );
};
export default ReviewCard;
