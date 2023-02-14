import { useSelector } from "react-redux";
import { getMediaContent } from "../../utils/helperFunctions";
import { PlaceholderPost } from "../post/placeholderPost";
import { Post } from "../post/post";

export const Posts = ({ posts }) => {
  const { isLoadingPosts } = useSelector((state) => state.posts);

  return (
    <div className="postsContainer">
      {posts.children && !isLoadingPosts ? (
        posts.children.map((post) => {
          return (
            <Post
              key={post.data.id}
              mediaContent={getMediaContent(post)}
              post={post}
            />
          );
        })
      ) : (
        <>
          <PlaceholderPost />
          <PlaceholderPost />
          <PlaceholderPost />
          <PlaceholderPost />
          <PlaceholderPost />
        </>
      )}
    </div>
  );
};
