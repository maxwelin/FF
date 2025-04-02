import { CircleArrowUp } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";
import { useContext } from "react";
import { ActivityContext } from "../../Providers/ActivityContext";

const Testimonials = () => {
  const { testimonialRef }: any = useContext(ActivityContext);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper} ref={testimonialRef}>
      <h1>Vad tycker våra kunder?</h1>
      <div className={styles.cardContainer}>
        <TestimonialCard
          img="/assets/adrian.png"
          name="Adrian Mendez"
          activity="Bouldering, grupp"
          text="Hade bara klättrat inomhus förut, men tack vare den grymma instruktören och den peppande gruppen kände jag mig snabbt bekväm
          Vi fick lära oss grunderna, utmana oss själva och ha riktigt kul tillsammans
          Perfekt kombination av träning och socialt häng! Rekommenderas starkt till alla som vill testa något nytt och spännande."
        />
        <TestimonialCard
          img="/assets/emilia.png"
          name="Emilia Vargas"
          activity="Forskajak"
          text="Jag hade aldrig paddlat i forsar tidigare, men tack vare den tydliga genomgången och det stöd vi fick vågade jag verkligen utmana mig själv
          Att susa nerför strömmande vatten var både spännande och befriande! Helt magiskt, en perfekt mix av action, natur och gemenskap
          Jag längtar redan efter att göra det igen!"
        />
        <TestimonialCard
          img="/assets/marcus.png"
          name="Marcus Leander"
          activity="Snöskovandring, par"
          text="Vilken upplevelse! Guiden var superkunnig och visade oss fantastiska platser vi aldrig hade hittat själva
          En perfekt kombination av frisk luft, vackra vyer och kvalitetstid
          Rekommenderas starkt för alla par som vill uppleva något unikt och romantiskt i naturen."
        />
      </div>
      <div className={styles.buttonContainer} onClick={handleClick}>
        <CircleArrowUp
          size={50}
          color="white"
          strokeWidth={1.5}
          className={styles.button}
        ></CircleArrowUp>
      </div>
    </div>
  );
};
export default Testimonials;
