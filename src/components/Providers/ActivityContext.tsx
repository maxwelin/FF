import { createContext, useEffect, useState, ReactNode } from "react";

interface ActivityObject {
  img: string;
  h2: string;
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
}

interface ProviderProps {
  children: ReactNode;
}

const ActivityContext = createContext<ContextProps | undefined>(undefined);

const ActivityContextProvider: React.FC<ProviderProps> = ({ children }) => {
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
    fetch("/mockData/mockData.json")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
        setBlogItems(data.blogItems);
      });
  }, []);

  return (
    <ActivityContext.Provider value={{ activities, blogItems }}>
      {children}
    </ActivityContext.Provider>
  );
};
export { ActivityContext, ActivityContextProvider };
