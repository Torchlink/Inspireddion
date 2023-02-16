import { renderwithProviders } from "../../../utils/test-utils";
import { SubredditPage } from "../subredditPage"
import { screen } from "@testing-library/react";


beforeEach(() => {
    fetch.resetMocks();
})

describe("SubredditPage", () => {
    it("", async () => {
        renderwithProviders(<SubredditPage />)

        expect(screen.getByAltText(/Placeholder Img/i)).toBeInTheDocument();
    })
})