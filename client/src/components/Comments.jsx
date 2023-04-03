import { useContext, useState } from "react";

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment.trim()]);
      setComment('');
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
        />
        <button type="submit">Post Comment</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;