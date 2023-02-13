import { Link } from "react-router-dom";

export const SubredditList = ({ subreddits }) => {
  return (
    <ul className="subredditList">
      {subreddits.map((subreddit) => {
        return (
          <li key={subreddit.name}>
            <Link to={`/r/${subreddit.name}`}>/r/{subreddit.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
