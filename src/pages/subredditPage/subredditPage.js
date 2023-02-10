import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Posts } from "../../components/posts/posts";
import {
  loadPosts,
  loadSubreddit,
  selectPosts,
} from "../../features/posts/postsSlice";

export const SubredditPage = () => {
  const dispatch = useDispatch();
  const { subredditName } = useParams();

  useEffect(() => {
    dispatch(loadSubreddit(subredditName));
  }, [subredditName, dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <div className="subredditPageContainer">
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
    </div>
  );
};
