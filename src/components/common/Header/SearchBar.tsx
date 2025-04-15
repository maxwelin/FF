import { Search } from "lucide-react";
import styles from "./Header.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ActivityContext } from "../../Providers/ActivityContext";

const SearchBar = () => {
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

  const [searchResult, setSearchResult] = useState(activities);
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleClickOutside = (event: any) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setToggleSearch(false);
      setSearchVal("");
    }
  };

  useEffect(() => {
    if (toggleSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [toggleSearch]);

  useEffect(() => {
    if (searchResult) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchResult]);

  const handleClick = () => {
    setToggleSearch(!toggleSearch);
    if (!toggleSearch && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setSearchVal("");
      handleClick();
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    const filteredActivities = activities.filter((activity) =>
      activity.h2.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResult(filteredActivities);
  };

  const searchRef = useRef<any>(null);
  const inputRef = useRef<any>(null);
  return (
    <>
      <Search
        className={`${styles.icon} ${styles.searchIcon}`}
        onClick={handleClick}
      />
      {toggleSearch && (
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
              className="w-full bg-amber-600 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 py-2 transition duration-300 ease"
              placeholder="Sök efter aktivitet"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {toggleSearch && searchVal && searchResult.length > 0 && (
        <ul ref={searchRef} className={`${styles.searchList} ${styles.list}`}>
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
    </>
  );
};
export default SearchBar;
