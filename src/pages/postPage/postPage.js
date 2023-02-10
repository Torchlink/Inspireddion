import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectComments } from "../../features/comments/commentsSlice";
import {
  loadCurrentPost,
  selectCurrentPost,
} from "../../features/posts/postsSlice";

export const PostPage = () => {
  const dispatch = useDispatch();
  const { subredditName, postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(subredditName);
    console.log(postId);
    dispatch(loadCurrentPost({ subredditName, postId }));
  }, [subredditName, postId, dispatch]);

  const post = useSelector(selectCurrentPost);
  const comments = useSelector(selectComments);

  return (
    <div>
      {post.data.children && (
        <div className="postPageContainer">
          <button onClick={() => navigate(-1)}>Back to {subredditName}</button>
          <Link to={`/r/${subredditName}`}>{`/r/${subredditName}`}</Link>
          <h1>{post.data.children[0].data.title}</h1>
          <div className="singlePostImgContainer">
            <img src={post.data.children[0].data.url} />
          </div>
          <div className="commentsContainer">
            <ul>
              {comments.data.children.map((comment) => {
                return <li key={comment.data.id}>{comment.data.body}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
