import { createContext, useEffect, useState, ReactNode } from "react";

interface ActivityObject {
  id: string;
  img: string;
  h2: string;
  h3: string;
  text: string;
  price: string;
  rating: [number, number];
}

interface BlogObject {
  h2: string;
  h3: string;
  img: string;
  alt: string;
  text: string;
}

interface ContextProps {
  activities: {
    climbing: ActivityObject[];
    kayak: ActivityObject[];
    snowshoes: ActivityObject[];
  };
  blogItems: BlogObject[];
  persons: number;
  setPersons: React.Dispatch<React.SetStateAction<number>>;
}

interface ProviderProps {
  children: ReactNode;
}

const ActivityContext = createContext<ContextProps | undefined>(undefined);

const ActivityContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [persons, setPersons] = useState(1);
  const [blogItems, setBlogItems] = useState<BlogObject[]>([]);
  const [activities, setActivities] = useState<{
    climbing: ActivityObject[];
    kayak: ActivityObject[];
    snowshoes: ActivityObject[];
  }>({
    climbing: [],
    kayak: [],
    snowshoes: [],
  });

  useEffect(() => {
    try {
      fetch("/mockData/mockData.json")
        .then((response) => response.json())
        .then((data) => {
          setActivities(data);
          setBlogItems(data.blogItems);
        });
    } catch (error) {
      console.error("Error fetching data ", error);
    }
  }, []);

  return (
    <ActivityContext.Provider
      value={{ activities, blogItems, persons, setPersons }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
export { ActivityContext, ActivityContextProvider };
