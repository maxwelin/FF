import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import styles from "./SignUp.module.css";
import { ChevronRight } from "lucide-react";
import { toast, Slide } from "react-toastify";
import { ActivityContext } from "../../Providers/ActivityContext";

const SignUp = () => {
  const { setRegister }: any = useContext(ActivityContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const errorSwitch = (error: string) => {
    switch (error) {
      case "Firebase: Error (auth/email-already-in-use).":
        toast.error("Den här email-adressen är redan registrerad.", {
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
        break;

      case "Firebase: Error (auth/invalid-email).":
        toast.error("Ogiltig email-adress", {
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
        break;

      case "Firebase: Password should be at least 6 characters (auth/weak-password).":
        toast.error("Lösenordet måste vara minst 6 tecken långt", {
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
        break;

      default:
        break;
    }
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Lösenorden matchar inte", {
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
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        setRegister(false);
        toast.success(`Användare skapad ${email}`, {
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
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          createdAt: new Date(),
        });
      } catch (error: any) {
        console.error("Signup error: ", error.message);
        errorSwitch(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSignUp} className={styles.form}>
      <label className={styles.emailLabel} htmlFor="email">
        Email
      </label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} required />
      <label className={styles.passwordLabel} htmlFor="password">
        Lösenord
      </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label className={styles.passwordLabelConfirm} htmlFor="password">
        Bekräfta lösenord
      </label>
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit" className={`${styles.cta} ${styles.login}`}>
        Registrera
        <ChevronRight className={styles.chevron} size={32} />
      </button>
      <br />
      <p onClick={() => setRegister(false)}>Redan medlem? Logga in</p>
    </form>
  );
};
export default SignUp;
