import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Posts } from "../../components/posts/posts";
import {
  resetBeforeArray,
  selectPosts,
} from "../../features/posts/postsSlice";
import { loadPosts } from "../../features/posts/postSliceThunks";
import { setCurrentSubreddit } from "../../features/subreddits/subredditsSlice";
import {motion} from "framer-motion";
import { PageNavigation } from "../../components/pageNavigation/pageNavigation";

export const SubredditPage = () => {
  const dispatch = useDispatch();
  const { subredditName } = useParams();

  useEffect(() => {
    dispatch(loadPosts({extension: `r/${subredditName}/.json`}));
    dispatch(setCurrentSubreddit(subredditName))
    dispatch(resetBeforeArray)
  }, [subredditName, dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 0.75}} className="subredditPageContainer">
      <Posts posts={posts} />
      <PageNavigation posts={posts} subredditName={subredditName} />
    </motion.div>
  );
};
