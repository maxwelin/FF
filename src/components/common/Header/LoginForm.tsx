import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { toast, Slide } from "react-toastify";
import styles from "./SignUp.module.css";
import { ActivityContext } from "../../Providers/ActivityContext";
import { ChevronRight } from "lucide-react";

const LoginForm = ({ setModal }: any) => {
  const { setLoggedIn, setLoggedInEmail, loggedIn, setRegister }: any =
    useContext(ActivityContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => {
    setRegister(true);
  };

  const forgotPw = () => {
    toast.error("Synd, skriv ner det nästa gång 🙂", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in:", userCredential.user);
      setLoggedIn(true);
      setLoggedInEmail(userCredential.user.email);
      setModal(false);
      console.log(loggedIn);
      toast.success(`Välkommen ${userCredential.user.email}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } catch (error: any) {
      console.error("Error logging in:", error.message);
      toast.error("Fel användarnamn eller lösenord", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <label className={styles.emailLabel} htmlFor="email">
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className={styles.passwordLabel} htmlFor="password">
        Lösenord
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className={`${styles.cta} ${styles.login}`} type="submit">
        Logga in
        <ChevronRight className={styles.chevron} size={32} />
      </button>
      <p onClick={forgotPw}>Glömt lösenord?</p>
      <br />
      <button
        className={`${styles.cta} ${styles.register}`}
        onClick={handleRegisterClick}
        type="button"
      >
        Registrera
      </button>
    </form>
  );
};

export default LoginForm;
