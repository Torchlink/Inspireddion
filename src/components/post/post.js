import { Link } from "react-router-dom";
import { GalleryDisplay } from "./mediaDIsplay/galleryDisplay";
import { ImgDisplay } from "./mediaDIsplay/imgDisplay";
import { TextDisplay } from "./mediaDIsplay/textDisplay";
import { VideoDisplay } from "./mediaDIsplay/videoDisplay";

export const Post = ({ post, mediaContent }) => {
  return (
    <div className="post">
      <Link to={`/r/${post.data.subreddit}/comments/${post.data.id}`}>
        <div className="postInfoContainer">
          <div className="voteCount">
            <span className="upvote">&#8249;</span>
            {post.data.ups}
            <span className="downvote">&#8250;</span>
          </div>
          <div className="metaInfoContainer">
            <span className="postTitle">{post.data.title}</span>
            <span className="postComments">
              Comments: {post.data.num_comments}
            </span>
            <span className="postAuthor">
              posted by /u/{post.data.author} in /r/{post.data.subreddit}
            </span>
          </div>
        </div>
      </Link>
      {mediaContent.type === "gallery" && (
        <GalleryDisplay mediaContent={mediaContent} />
      )}
      {mediaContent.type === "video" && (
        <VideoDisplay mediaContent={mediaContent} />
      )}
      {mediaContent.type === "img" && (
        <ImgDisplay mediaContent={mediaContent} />
      )}
      {mediaContent.type === "text" && (
        <TextDisplay mediaContent={mediaContent} />
      )}
    </div>
  );
};
