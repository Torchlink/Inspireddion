import { fireEvent, render, screen } from "@testing-library/react";
import { GalleryDisplay } from "../galleryDisplay";

const mockedMediaContent = {
  gallery_data: [
    {
      src: "https://preview.redd.it/e651v28lyhia1.jpg?width=320&crop=smart&auto=webp&v=enabled&s=4cd9d34343415be77dbd9c37c176c5cfdd6ffdbb",
      height: "320",
      width: "310",
      id: "frmxkt2aljia1",
    },
    {
      src: "https://preview.redd.it/ibvgj28lyhia1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=1ce2bf5758cc6ddd9a3f4d2ff4bdc976fead1f35",
      height: "320",
      width: "640",
      id: "k3kcwse9ljia1",
    },
    {
      src: "https://preview.redd.it/ltl8528lyhia1.jpg?width=320&crop=smart&auto=webp&v=enabled&s=0dcbf39043a1174240f6fd8e2b58021a7298f74d",
      height: "320",
      width: "310",
      id: "npdk48oaljia1",
    },
  ],
};

describe("ImgDisplay", () => {
  it("renders an image passed to it by the mediaContent prop", () => {
    render(<GalleryDisplay mediaContent={mockedMediaContent} />);
    const imageElement = screen.getByAltText(/Gallery Img/i);
    expect(imageElement).toBeInTheDocument();
  });

  it("displays an image passed to it by the mediaContent prop", () => {
    render(<GalleryDisplay mediaContent={mockedMediaContent} />);
    const imageElement = screen.getByAltText(/Gallery Img/i);
    expect(imageElement).toBeVisible();
  });

  describe("Next-button", () => {
    it("changes the currently displayed image to the next image in the gallery when the next button is pressed", () => {
      render(<GalleryDisplay mediaContent={mockedMediaContent} />);
      const buttonElementNext = screen.getByTestId("galleryDisplayNextButton");
      const imageElement = screen.getByAltText(/Gallery Img/i);
      expect(imageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[0].id
      );
      fireEvent.click(buttonElementNext);
      const nextImageElement = screen.getByAltText(/Gallery Img/i);
      expect(nextImageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[1].id
      );
    });

    it("changes the displayed image to the first image in the gallery if the current image is the last in the gallery", () => {
      render(<GalleryDisplay mediaContent={mockedMediaContent} />);
      const buttonElementNext = screen.getByTestId("galleryDisplayNextButton");
      const imageElement = screen.getByAltText(/Gallery Img/i);
      expect(imageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[0].id
      );
      fireEvent.click(buttonElementNext);
      fireEvent.click(buttonElementNext);
      const secondImageElement = screen.getByAltText(/Gallery Img/i);
      expect(secondImageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[2].id
      );
      fireEvent.click(buttonElementNext);
      const thirdImageElement = screen.getByAltText(/Gallery Img/i);
      expect(thirdImageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[0].id
      );
    });
  });

  describe("Prev-button", () => {
    it("changes the currently displayed image to the previous image in the gallery when the next button is pressed", () => {
      render(<GalleryDisplay mediaContent={mockedMediaContent} />);
      const buttonElementNext = screen.getByTestId("galleryDisplayNextButton");
      const buttonElementPrev = screen.getByTestId("galleryDisplayPrevButton");
      const imageElement = screen.getByAltText(/Gallery Img/i);
      expect(imageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[0].id
      );
      fireEvent.click(buttonElementNext);
      fireEvent.click(buttonElementNext);
      fireEvent.click(buttonElementPrev);
      const secondImageElement = screen.getByAltText(/Gallery Img/i);
      expect(secondImageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[1].id
      );
    });

    it("changes the displayed image to the last image in the gallery if the current image is the first in the gallery", () => {
      render(<GalleryDisplay mediaContent={mockedMediaContent} />);
      const buttonElementPrev = screen.getByTestId("galleryDisplayPrevButton");
      const imageElement = screen.getByAltText(/Gallery Img/i);
      expect(imageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[0].id
      );
      fireEvent.click(buttonElementPrev);
      const secondImageElement = screen.getByAltText(/Gallery Img/i);
      expect(secondImageElement.dataset.testid).toBe(
        mockedMediaContent.gallery_data[2].id
      );
    });
  });
});
