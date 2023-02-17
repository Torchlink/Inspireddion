import { useState } from "react";

export const GalleryDisplay = ({ mediaContent }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    slideIndex >= mediaContent.gallery_data.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    slideIndex === 0
      ? setSlideIndex(mediaContent.gallery_data.length - 1)
      : setSlideIndex(slideIndex - 1);
  };

  return (
    <div className="postGalleryContainer">
      <button className="slideButton prev" data-testid="galleryDisplayPrevButton" onClick={prevSlide}></button>
      {mediaContent.gallery_data && (
        <img
          src={mediaContent.gallery_data[slideIndex].src}
          width={mediaContent.gallery_data[slideIndex].width}
          height={mediaContent.gallery_data[slideIndex].height}
          data-testid = {mediaContent.gallery_data[slideIndex].id}
          alt="Gallery img"
        />
      )}
      <button className="slideButton next" data-testid="galleryDisplayNextButton" onClick={nextSlide}></button>
    </div>
  );
};
