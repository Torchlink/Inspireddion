import { CommentList } from "../../components/commentList/commentList";
import { GalleryDisplay } from "../../components/post/mediaDIsplay/galleryDisplay";
import { ImgDisplay } from "../../components/post/mediaDIsplay/imgDisplay";
import { TextDisplay } from "../../components/post/mediaDIsplay/textDisplay";
import { VideoDisplay } from "../../components/post/mediaDIsplay/videoDisplay";

export function SinglePost({mediaContent, post, comments}) {
  return (
    <div className="postPageContainer">
      <h1>{post.data.children[0].data.title}</h1>
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
      <div className="commentsContainer">
        {comments && <CommentList comments={comments} />}
      </div>
    </div>
  );
}
