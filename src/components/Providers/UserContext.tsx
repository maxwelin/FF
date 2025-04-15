import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loggedInEmail: string;
  setLoggedInEmail: React.Dispatch<React.SetStateAction<string>>;
  loggedInUserFirstName: string;
  setLoggedInUserFirstName: React.Dispatch<React.SetStateAction<string>>;
  loggedInUserLastName: string;
  setLoggedInUserLastName: React.Dispatch<React.SetStateAction<string>>;
  register: boolean;
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<ContextProps | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

const UserContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState("");
  const [loggedInUserFirstName, setLoggedInUserFirstName] = useState("");
  const [loggedInUserLastName, setLoggedInUserLastName] = useState("");
  const [register, setRegister] = useState(false);

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        loggedInEmail,
        setLoggedInEmail,
        loggedInUserFirstName,
        setLoggedInUserFirstName,
        loggedInUserLastName,
        setLoggedInUserLastName,
        register,
        setRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
