import { render, screen } from "@testing-library/react";
import { ImgDisplay } from "../imgDisplay";

const mockedMediaContent = {
  src: "https://i.redd.it/skqcweewniia1.jpg",
  width: "600",
  height: "650",
};

describe("ImgDisplay", () => {
  it("renders an image passed to it by the mediaContent prop", () => {
    render(<ImgDisplay mediaContent={mockedMediaContent} />);
    const imageElement = screen.getByAltText("Post img");
    expect(imageElement).toBeInTheDocument();
  });

  it("displays an image passed to it by the mediaContent prop", () => {
    render(<ImgDisplay mediaContent={mockedMediaContent} />);
    const imageElement = screen.getByAltText("Post img");
    expect(imageElement).toBeVisible();
  });
});
