import placeholderImg from "../../assets/inspireddion_logo_large.webp";

export function PlaceholderPost() {
  return (
    <div className="post">
      <div className="postInfoContainer">
        <div className="loadingBackground placeholderTitle"></div>
      </div>
      <div className="postImgContainer">
        <img
          src={placeholderImg}
          height="400"
          width="400"
          alt="Placeholder img"
          className="placeholderImg"
        />
      </div>
    </div>
  );
}
