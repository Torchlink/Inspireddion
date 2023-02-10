import { getMediaContent } from "../../utils/helperFunctions";
import { Post } from "../post/post";

export const Posts = ({ posts }) => {
  return (
    <div className="postsContainer">
      {posts.children &&
        posts.children.map((post) => {
          return <Post key={post.data.id} mediaContent={getMediaContent(post)} post={post} />;
        })}
    </div>
  );
};
