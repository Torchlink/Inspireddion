import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CommentList } from "../../components/commentList/commentList";
import { selectComments } from "../../features/comments/commentsSlice";
import {
  loadCurrentPost,
  selectCurrentPost,
} from "../../features/posts/postsSlice";

export const PostPage = () => {
  const dispatch = useDispatch();
  const { subredditName, postId } = useParams();

  useEffect(() => {
    dispatch(loadCurrentPost({ subredditName, postId }));
  }, [subredditName, postId, dispatch]);

  const post = useSelector(selectCurrentPost);
  const comments = useSelector(selectComments);

  return (
    <div>
      {post.data.children && (
        <div className="postPageContainer">
          <Link to={`/r/${subredditName}`}>{`Back to /r/${subredditName}`}</Link>
          <h1>{post.data.children[0].data.title}</h1>
          <div className="singlePostImgContainer">
            <img src={post.data.children[0].data.url} alt="Post" />
          </div>
          <div className="commentsContainer">
            {comments && <CommentList comments={comments} />}
          </div>
        </div>
      )}
    </div>
  );
};

//  const navigate = useNavigate();          <button onClick={() => navigate(-1)}>Back to {subredditName}</button>