import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Posts } from "../../components/posts/posts";
import { selectAllOptions } from "../../features/options/optionsSlice";
import { selectPosts } from "../../features/posts/postsSlice";
import { loadPosts } from "../../features/posts/postSliceThunks";
import { selectCurrentSubreddit } from "../../features/subreddits/subredditsSlice";

export function SearchPage() {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const { subredditSearch } = useSelector(selectAllOptions);

  const queryParams = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);

  useEffect(() => {
    const searchQuery = queryParams.get("q");
    if (currentSubreddit && subredditSearch) {
      dispatch(
        loadPosts({extension:`r/${currentSubreddit}/search/.json?q=${searchQuery}&restrict_sr=on`})
      );
    } else {
      dispatch(
        loadPosts({extension:`search/.json?q=${searchQuery}`})
      );
    }
  }, [queryParams, search, currentSubreddit, subredditSearch, dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <div className="subredditPageContainer">
    <Posts posts={posts} />
    </div>
  );
}
