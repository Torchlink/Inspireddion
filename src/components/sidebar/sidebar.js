import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllOptions } from "../../features/options/optionsSlice";
import {
  filterSubreddits,
  selectFilteredSubreddits,
  selectSubreddits,
} from "../../features/subreddits/subredditsSlice";
import { SubredditList } from "./subredditList";

export const Sidebar = () => {
  const filterSubredditRef = useRef();

  const options = useSelector(selectAllOptions);
  const filteredSubreddits = useSelector(selectFilteredSubreddits);
  const loadedSubreddits = useSelector(selectSubreddits);
  const dispatch = useDispatch();

  const subreddits = filteredSubreddits ? filteredSubreddits : loadedSubreddits;

  return (
    <div className={options.sidebarOpen ? "sidebar open" : "sidebar"}>
      <input
        className="sidebarInput"
        type="text"
        placeholder="Filter subreddits"
        onChange={() => {
          dispatch(filterSubreddits(filterSubredditRef.current.value));
        }}
        ref={filterSubredditRef}
      />
      <SubredditList subreddits={subreddits} />
    </div>
  );
};
