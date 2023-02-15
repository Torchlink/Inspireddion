import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/posts/posts";
import { resetBeforeArray, selectPosts } from "../../features/posts/postsSlice";
import { loadPosts } from "../../features/posts/postSliceThunks";
import { setCurrentSubreddit } from "../../features/subreddits/subredditsSlice";
import { motion } from "framer-motion";
import { PageNavigation } from "../../components/pageNavigation/pageNavigation";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts({extension:"r/popular/.json?geo_filter=GLOBAL"}));
    dispatch(setCurrentSubreddit(null));
    dispatch(resetBeforeArray)
  }, [dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 0.75}} className="homePageContainer">
      <Posts posts={posts} />
      <PageNavigation posts={posts} subredditName={"popular"} />
    </motion.div>
  );
};
