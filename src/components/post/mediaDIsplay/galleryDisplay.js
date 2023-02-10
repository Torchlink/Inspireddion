export const GalleryDisplay = ({ post }) => {
    return (
      <div>
        {post.data.url && !post.data.gallery_data && (
          <div className="postImgContainer">

          </div>
        )}
      </div>
    );
  };