import { createContext, useEffect, useState, ReactNode, useRef } from "react";
import { db, collection, getDocs } from "../../firebase.js";

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
  climbingActivities: ActivityObject[];
  kayakActivities: ActivityObject[];
  snowshoesActivities: ActivityObject[];
  activities: Object[];
  blogItems: BlogObject[];
  persons: number;
  favoriteList: string[];
  setFavoriteList: React.Dispatch<React.SetStateAction<never[]>>;
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  setPersons: React.Dispatch<React.SetStateAction<number>>;
  testimonialRef: React.RefObject<null>;
  climbingSectionRef: React.RefObject<null>;
}

interface ProviderProps {
  children: ReactNode;
}

const ActivityContext = createContext<ContextProps | undefined>(undefined);

const ActivityContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [persons, setPersons] = useState(1);
  const [favoriteList, setFavoriteList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [blogItems, setBlogItems] = useState<BlogObject[]>([]);
  const [activities, setActivities] = useState<Object[]>([]);
  const [climbingActivities, setClimbingActivities] = useState<
    ActivityObject[]
  >([]);
  const [kayakActivities, setKayakActivities] = useState<ActivityObject[]>([]);
  const [snowshoesActivities, setSnowshoesActivities] = useState<
    ActivityObject[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          climbingActivitiesSnapshot,
          kayakActivitiesSnapshot,
          snowshoesActivitiesSnapshot,
          blogItemsSnapshot,
          climbingSnapshot,
          kayakSnapshot,
          snoeshoesSnapshot,
        ] = await Promise.all([
          getDocs(collection(db, "climbing_activities")),
          getDocs(collection(db, "kayak_activities")),
          getDocs(collection(db, "snowshoes_activities")),
          getDocs(collection(db, "blogItems")),
          getDocs(collection(db, "climbing")),
          getDocs(collection(db, "kayak")),
          getDocs(collection(db, "snowshoes")),
        ]);

        const climbingActivities = climbingActivitiesSnapshot.docs.map(
          (doc: any) => doc.data()
        );
        const kayakActivities = kayakActivitiesSnapshot.docs.map((doc: any) =>
          doc.data()
        );
        const snowshoesActivities = snowshoesActivitiesSnapshot.docs.map(
          (doc: any) => doc.data()
        );
        const blogItems = blogItemsSnapshot.docs.map((doc: any) => doc.data());
        const climbing = climbingSnapshot.docs.map((doc: any) => doc.data());
        const kayak = kayakSnapshot.docs.map((doc: any) => doc.data());
        const snowshoes = snoeshoesSnapshot.docs.map((doc: any) => doc.data());

        const activities = [];
        activities.push(climbing, kayak, snowshoes);

        setClimbingActivities(climbingActivities);
        setKayakActivities(kayakActivities);
        setSnowshoesActivities(snowshoesActivities);
        setBlogItems(blogItems);
        setActivities(activities);
      } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
      }
    };

    fetchData();
  }, []);

  const testimonialRef = useRef(null);
  const climbingSectionRef = useRef(null);

  return (
    <ActivityContext.Provider
      value={{
        climbingActivities,
        kayakActivities,
        snowshoesActivities,
        activities,
        blogItems,
        persons,
        favoriteList,
        setFavoriteList,
        searchVal,
        setSearchVal,
        setPersons,
        testimonialRef,
        climbingSectionRef,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
export { ActivityContext, ActivityContextProvider };
