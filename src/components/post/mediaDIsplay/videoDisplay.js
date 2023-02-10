export const VideoDisplay = ({ mediaContent }) => {
  return (
    <div className="postVideoContainer">
      <video controls height={mediaContent.height} width={mediaContent.width}>
        <source src={mediaContent.src} />
      </video>
    </div>
  );
};
