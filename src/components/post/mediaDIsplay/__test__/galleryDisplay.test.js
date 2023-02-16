import { render, screen } from "@testing-library/react";
import { GalleryDisplay } from "../galleryDisplay";

const mockedMediaContent = {
  gallery_data: [
    {
      src: "https://preview.redd.it/e651v28lyhia1.jpg?width=320&crop=smart&auto=webp&v=enabled&s=4cd9d34343415be77dbd9c37c176c5cfdd6ffdbb",
      height: "320",
      width: "310",
    },
    {
      src: "https://preview.redd.it/ibvgj28lyhia1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=1ce2bf5758cc6ddd9a3f4d2ff4bdc976fead1f35",
      height: "320",
      width: "640",
    },
    {
      src: "https://preview.redd.it/ltl8528lyhia1.jpg?width=320&crop=smart&auto=webp&v=enabled&s=0dcbf39043a1174240f6fd8e2b58021a7298f74d",
      height: "320",
      width: "310",
    },
  ],
};

describe("ImgDisplay", () => {
  it("renders an image passed to it by the mediaContent prop", () => {
    render(<GalleryDisplay mediaContent={mockedMediaContent} />);
    const imageElement = screen.getByAltText("Gallery img");
    expect(imageElement).toBeInTheDocument();
  });

  it("displays an image passed to it by the mediaContent prop", () => {
    render(<GalleryDisplay mediaContent={mockedMediaContent} />);
    const imageElement = screen.getByAltText("Gallery img");
    expect(imageElement).toBeVisible();
  });
});
