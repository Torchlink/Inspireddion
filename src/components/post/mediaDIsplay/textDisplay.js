import MarkdownView from "react-showdown";

export const TextDisplay = ({ mediaContent }) => {
    return (
      <div className={mediaContent.selftext ? "postTextContainer selftext" : "postTextContainer noSelftext" }>
        {mediaContent.selftext && <MarkdownView markdown={mediaContent.selftext} options={{emoji: true}} className="selftextDisplay" />}
      </div>
    );
  };
  