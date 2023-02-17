import { renderwithProviders } from "../../../utils/test-utils";
import { SubredditPage } from "../subredditPage";
import { screen } from "@testing-library/react";
import { mockFirstSubredditPageResponse } from "../../../utils/mockRedditResponses";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

function MockSubredditPage() {
  return (
    <BrowserRouter>
      <SubredditPage />
    </BrowserRouter>
  );
}

beforeEach(() => {
  fetch.resetMocks();
});

describe("SubredditPage", () => {
  it("Shows placeholders before data is fetched, and loads a subreddit page correctly afterwards", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockFirstSubredditPageResponse));

    act(() => {
      renderwithProviders(<MockSubredditPage />);
    });

    const loadedPlaceholderImgElements = screen.getAllByAltText(/Placeholder Img/i);
    expect(loadedPlaceholderImgElements.length).toEqual(5);

    const postElements = screen.queryAllByText(/posted by \/u\//i);
    expect(postElements.length).toEqual(0);

    const loadedPostElements = await screen.findAllByText(/posted by \/u\//i);
    expect(loadedPostElements.length).toEqual(25);

    const placeholderImgElements = screen.queryAllByAltText(/Placeholder Img/i);
    expect(placeholderImgElements.length).toEqual(0);
  });
});
