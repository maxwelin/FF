import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import styles from "./SignUp.module.css";
import { ChevronRight } from "lucide-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created: ", user.uid);

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Signup error: ", error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp} className={styles.form}>
      <label className={styles.emailLabel} htmlFor="email">
        Email
      </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="adven.ture@email.com"
      />
      <label className={styles.passwordLabel} htmlFor="password">
        Lösenord
      </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="******"
      />
      <button type="submit" className={styles.cta}>
        Registrera
        <ChevronRight className={styles.chevron} size={32} />
      </button>
    </form>
  );
};
export default SignUp;
