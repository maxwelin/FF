import { createContext, useEffect, useState, ReactNode } from "react";

interface JSONObject {
  img: string;
  h2: string;
  text: string;
  price: string;
  rating: [number, number];
}

interface ContextProps {
  activities: {
    climbing: JSONObject[];
    kayak: JSONObject[];
    snowshoes: JSONObject[];
  };
}

interface ProviderProps {
  children: ReactNode;
}

const ActivityContext = createContext<ContextProps | undefined>(undefined);

const ActivityContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [activities, setActivities] = useState<{
    climbing: JSONObject[];
    kayak: JSONObject[];
    snowshoes: JSONObject[];
  }>({
    climbing: [],
    kayak: [],
    snowshoes: [],
  });

  useEffect(() => {
    fetch("/mockData/mockData.json")
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <ActivityContext.Provider value={{ activities }}>
      {children}
    </ActivityContext.Provider>
  );
};
export { ActivityContext, ActivityContextProvider };
