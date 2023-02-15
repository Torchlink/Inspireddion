import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PlaceholderPost } from "../../components/post/placeholderPost";
import { SinglePost } from "../../components/singlePost/singlePost";
import { selectComments } from "../../features/comments/commentsSlice";
import {
  selectCurrentPost,
} from "../../features/posts/postsSlice";
import { loadCurrentPost } from "../../features/posts/postSliceThunks";
import { getMediaContent } from "../../utils/helperFunctions";

export const PostPage = () => {
  const dispatch = useDispatch();
  const { subredditName, postId } = useParams();

  const { isLoadingCurrentPost } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadCurrentPost({ subredditName, postId }));
  }, [subredditName, postId, dispatch]);

  const post = useSelector(selectCurrentPost);
  const comments = useSelector(selectComments);

  return (
    <div>
      <Link
        className="buttonLink"
        to={`/r/${subredditName}`}
      >{`Back to /r/${subredditName}`}</Link>
      {post.data.children && !isLoadingCurrentPost ? (
        <SinglePost
          comments={comments}
          mediaContent={getMediaContent(post.data.children[0])}
          post={post}
        />
      ) : (
        <PlaceholderPost />
      )}
    </div>
  );
};

//  const navigate = useNavigate();          <button onClick={() => navigate(-1)}>Back to {subredditName}</button>
