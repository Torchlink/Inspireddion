import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/posts/posts";
import { loadPopular, selectPosts } from "../../features/posts/postsSlice";
import { setCurrentSubreddit } from "../../features/subreddits/subredditsSlice";
import { motion } from "framer-motion";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopular());
    dispatch(setCurrentSubreddit(null));
  }, [dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 0.75}} className="homePageContainer">
      <Posts posts={posts} />
    </motion.div>
  );
};
