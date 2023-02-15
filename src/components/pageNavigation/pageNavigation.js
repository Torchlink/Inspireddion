import { useDispatch, useSelector } from "react-redux";

import { loadPosts } from "../../features/posts/postSliceThunks";

export function PageNavigation({ posts, subredditName }) {
  const dispatch = useDispatch();
  const before = useSelector((state) => state.posts.beforeArray);

  return (
    <>
      {before.length > 0 && (
        <button
          className="pageNavButton prev"
          onClick={() => dispatch(loadPosts({extension:`r/${subredditName}/.json?count=25&before=${before.slice(-1)}`, loadBefore: true }))}
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
                {extension:`r/${subredditName}/.json?count=25&after=${posts.after}`}
              )
            )
          }
        >
          &#62;
        </button>
      )}
    </>
  );
}
