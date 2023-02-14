import MarkdownView from "react-showdown";

export function CommentList({ comments }) {
  const convertedComments = comments.data.children.map((comment) => {
    console.log(comment)
    return (
      <li key={comment.data.id}>
        <MarkdownView markdown={comment.data.body} options={{emoji: true}} />
      </li>
    );
  });

  return(
<ul>
{convertedComments}
</ul>
  );
}
