import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Posts } from "../../components/posts/posts";
import {
  loadPosts,
  loadSubreddit,
  selectPosts,
} from "../../features/posts/postsSlice";
import { setCurrentSubreddit } from "../../features/subreddits/subredditsSlice";
import {motion} from "framer-motion";

export const SubredditPage = () => {
  const dispatch = useDispatch();
  const { subredditName } = useParams();

  useEffect(() => {
    dispatch(loadSubreddit(subredditName));
    dispatch(setCurrentSubreddit(subredditName))
  }, [subredditName, dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 0.75}} className="subredditPageContainer">
      <Posts posts={posts} />
      <div>
        {posts.before && (
          <button
            className="pageNavButton prev"
            onClick={() =>
              dispatch(
                loadPosts(
                  `r/${subredditName}/.json?count=25&before=${posts.before}`
                )
              )
            }
          >
            &#60;
          </button>
        )}
        {posts.after && (
          <button
            className="pageNavButton next"
            onClick={() =>
              dispatch(
                loadPosts(
                  `r/${subredditName}/.json?count=25&after=${posts.after}`
                )
              )
            }
          >
            &#62;
          </button>
        )}
      </div>
    </motion.div>
  );
};
