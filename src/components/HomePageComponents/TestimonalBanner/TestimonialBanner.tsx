import Testimonial from "./Testimonial";
import styles from "./TestimonialBanner.module.css";

const TestimonialBanner = () => {
  return (
    <div className={styles.wrapper}>
      <Testimonial
        img="../../../public/assets/adrian.png"
        name="Adrian M."
        text="Rekommenderas starkt till alla som vill testa något nytt och spännande."
      />
      <Testimonial
        img="../../../public/assets/emilia.png"
        name="Emilia V."
        text="Helt magiskt, en perfekt mix av action, natur och gemenskap. "
      />
      <Testimonial
        img="../../../public/assets/marcus.png"
        name="Marcus L."
        text="Guiden var superkunnig och visade oss fantastiska platser vi aldrig hade hittat själva"
      />
    </div>
  );
};

export default TestimonialBanner;
