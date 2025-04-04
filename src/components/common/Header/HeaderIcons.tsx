import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { User, Heart, Search } from "lucide-react";
import { ActivityContext } from "../../Providers/ActivityContext";
import { Link } from "react-router-dom";

const HeaderIcons = () => {
  const {
    searchVal,
    setSearchVal,
    climbingActivities,
    kayakActivities,
    snowshoesActivities,
  }: any = useContext(ActivityContext);

  const activities = [
    ...climbingActivities,
    ...kayakActivities,
    ...snowshoesActivities,
  ];

  const [isFocused, setIsFocused] = useState(false);
  const [searchResult, setSearchResult] = useState(activities);

  const handleClick = (e: React.MouseEvent) => {
    if (searchRef.current) searchRef.current.classList.toggle(styles.visible);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSearchVal("");
      if (inputRef.current) inputRef.current.blur();
      handleClick();
    }, 100);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    const filteredActivities = activities.filter((activity) =>
      activity.h2.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResult(filteredActivities);
    console.log(searchResult);
  };

  useEffect(() => {
    const inputElement: any = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
      inputElement.addEventListener("blur", handleBlur);

      return () => {
        inputElement.removeEventListener("focus", handleFocus);
        inputElement.removeEventListener("blur", handleBlur);
      };
    }
  }, []);

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <div className={styles.iconContainer}>
      <Search
        className={`${styles.icon} ${styles.searchIcon}`}
        onClick={handleClick}
      />
      <Heart className={styles.icon} />
      <User className={styles.icon} />
      <div
        className={`w-full max-w-sm min-w-[240px] ${styles.searchBar}`}
        ref={searchRef}
      >
        <div className="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600 cursor-pointer hover:stroke-black"
            onClick={handleClick}
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>

          <input
            ref={inputRef}
            value={searchVal}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 py-2 transition duration-300 ease"
            placeholder="Sök efter aktivitet"
            onChange={handleChange}
          />
        </div>
      </div>
      {isFocused && searchVal && searchResult.length > 0 && (
        <ul className={styles.searchList}>
          {searchResult.map((activity) => (
            <Link
              key={activity.id}
              onMouseDown={handleLinkClick}
              className={styles.link}
              to={`/booking/${activity.id}`}
            >
              <li
                className={`border-0 mh-[45px] box-border p-4 ${styles.searchListItem}`}
              >
                {activity.h2}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default HeaderIcons;
