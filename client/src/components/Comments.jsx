import { useContext, useState } from "react";
import axios from "axios";
import moment from "moment";

const Comments = ({ commentProp, pid }) => {
  const [comment, setComment] = useState('');

  console.log(commentProp)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/comments/`, {
        desc: comment,
        pid: pid,
        createdAt: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      setComment("")
    } catch (err) {
      console.log(err);
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

      {/* <ul className="comment-map">
        {commentProp?.map((comment, index) => (
          <li key={index}>{comment.desc}</li>
        ))}
      </ul> */}

      <ul className="comment-map">
        {commentProp?.map((comment, index) => (
          <li key={index}>
            <div className="comment-user-info">
              {comment.img ? (
                <img src={comment.img} alt="User's profile" className="comment-user-logo" />
              ) : (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" alt="Default profile" className="comment-user-logo" />
              )}
              <span className="comment-user-name">{comment.username}</span>
            </div>
            <p className="comment-text">{comment.desc}</p>
            <p className="comment-time">{new Date(comment.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;