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
  loading: boolean;
  climbingActivities: ActivityObject[];
  kayakActivities: ActivityObject[];
  snowshoesActivities: ActivityObject[];
  activities: Object[];
  sortedClimbingActivities: Object[];
  sortedKayakActivities: Object[];
  sortedSnowshoesActivities: Object[];
  blogItems: BlogObject[];
  persons: number;
  favoriteList: Object[];
  setFavoriteList: React.Dispatch<React.SetStateAction<any>>;
  setSortedClimbingActivities: React.Dispatch<React.SetStateAction<any>>;
  setSortedKayakActivities: React.Dispatch<React.SetStateAction<any>>;
  setSortedSnowshoesActivities: React.Dispatch<React.SetStateAction<any>>;
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  setPersons: React.Dispatch<React.SetStateAction<number>>;
  testimonialRef: React.RefObject<null>;
  climbingSectionRef: React.RefObject<null>;
  searchRef: React.RefObject<null>;
  reviewRef: React.RefObject<null>;
  handleSearchBtnClick: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

const ActivityContext = createContext<ContextProps | undefined>(undefined);

const ActivityContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [persons, setPersons] = useState(1);
  const [favoriteList, setFavoriteList] = useState(() => {
    const stored = localStorage.getItem("favoriteList");
    return stored ? JSON.parse(stored) : [];
  });
  const [searchVal, setSearchVal] = useState("");
  const [blogItems, setBlogItems] = useState<BlogObject[]>([]);
  const [activities, setActivities] = useState<Object[]>([]);
  const [sortedClimbingActivities, setSortedClimbingActivities] = useState([]);
  const [sortedKayakActivities, setSortedKayakActivities] = useState([]);
  const [sortedSnowshoesActivities, setSortedSnowshoesActivities] = useState(
    []
  );
  useState<Object[]>(activities);
  const [climbingActivities, setClimbingActivities] = useState<
    ActivityObject[]
  >([]);
  const [kayakActivities, setKayakActivities] = useState<ActivityObject[]>([]);
  const [snowshoesActivities, setSnowshoesActivities] = useState<
    ActivityObject[]
  >([]);

  const setData = (
    climbingActivities: ActivityObject[],
    kayakActivities: ActivityObject[],
    snowshoesActivities: ActivityObject[],
    blogItems: BlogObject[],
    activities: Object[]
  ) => {
    setClimbingActivities(climbingActivities);
    setKayakActivities(kayakActivities);
    setSnowshoesActivities(snowshoesActivities);
    setBlogItems(blogItems);
    setActivities(activities);

    localStorage.setItem(
      "climbingActivities",
      JSON.stringify(climbingActivities)
    );
    localStorage.setItem("kayakActivities", JSON.stringify(kayakActivities));
    localStorage.setItem(
      "snowshoesActivities",
      JSON.stringify(snowshoesActivities)
    );
    localStorage.setItem("blogItems", JSON.stringify(blogItems));
    localStorage.setItem("activities", JSON.stringify(activities));
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedClimbing = localStorage.getItem("climbingActivities");
      const storedKayak = localStorage.getItem("kayakActivities");
      const storedSnowshoes = localStorage.getItem("snowshoesActivities");
      const storedBlogItems = localStorage.getItem("blogItems");
      const activities = localStorage.getItem("activities");

      if (
        storedClimbing &&
        storedKayak &&
        storedSnowshoes &&
        storedBlogItems &&
        activities
      ) {
        setClimbingActivities(JSON.parse(storedClimbing));
        setKayakActivities(JSON.parse(storedKayak));
        setSnowshoesActivities(JSON.parse(storedSnowshoes));
        setBlogItems(JSON.parse(storedBlogItems));
        setActivities(JSON.parse(activities));
        setLoading(false);
        console.log("using stored data");
      } else {
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
          const blogItems = blogItemsSnapshot.docs.map((doc: any) =>
            doc.data()
          );
          const climbing = climbingSnapshot.docs.map((doc: any) => doc.data());
          const kayak = kayakSnapshot.docs.map((doc: any) => doc.data());
          const snowshoes = snoeshoesSnapshot.docs.map((doc: any) =>
            doc.data()
          );

          const activities = [];
          activities.push(climbing, kayak, snowshoes);

          setData(
            climbingActivities,
            kayakActivities,
            snowshoesActivities,
            blogItems,
            activities
          );

          console.log("using fetched data");
        } catch (error) {
          console.error("Error fetching data from Firestore: ", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, []);

  const handleSearchBtnClick = () => {
    searchRef.current.classList.toggle(styles.visible);
  };

  const testimonialRef = useRef(null);
  const climbingSectionRef = useRef(null);
  const searchRef = useRef(null);
  const reviewRef = useRef(null);

  return (
    <ActivityContext.Provider
      value={{
        loading,
        climbingActivities,
        kayakActivities,
        snowshoesActivities,
        activities,
        sortedClimbingActivities,
        sortedKayakActivities,
        sortedSnowshoesActivities,
        setSortedClimbingActivities,
        setSortedKayakActivities,
        setSortedSnowshoesActivities,
        blogItems,
        persons,
        favoriteList,
        setFavoriteList,
        searchVal,
        setSearchVal,
        setPersons,
        testimonialRef,
        climbingSectionRef,
        searchRef,
        reviewRef,
        handleSearchBtnClick,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityContextProvider };
