export const ImgDisplay = ({ mediaContent }) => {
  return (
    <div className="postImgContainer">
      <img src={mediaContent.src} height={mediaContent.height} width={mediaContent.width} alt="Post img" />
    </div>
  );
};
