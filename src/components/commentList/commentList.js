import MarkdownView from "react-showdown";

export function CommentList({ comments }) {
  const convertedComments = comments.data.children.map((comment) => {
    return (
      <li key={comment.data.id}>
        <span className="commentInfo">{comment.data.author}</span>
        <MarkdownView className="commentText" markdown={comment.data.body} options={{emoji: true}} />
      </li>
    );
  });

  return(
<ul>
{convertedComments}
</ul>
  );
}
