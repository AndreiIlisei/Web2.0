import React, { useState, useEffect } from "react";
import "../styles/single.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Comments from "../components/Comments";
import { HiTrash, HiPencilAlt } from "react-icons/hi";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPosts] = useState({});
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const deletePost = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/comments/${postId}`);
        setComments(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPosts(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="postPage">
      <div className="postContentContainer">

        <div className="postTitle">
          <h1>{post.title}</h1>
        </div>
        <div className="postImgContainer">
          {post.img ? (
            <img className="postImage" src={`../uploads/${post?.img}`} />
          ) : (
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" />
          )}

        </div>

        <div className="user">
          {post.userImg ? (
            <img src={post.userImg} alt="picture" />
          ) : (
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" />
          )}
          <div className="info">
            <span>{post.username}</span>
            <p> Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <HiPencilAlt style={{ width: 30, height: 30, color: 'black' }}/>
              </Link>
              <HiTrash style={{ width: 30, height: 30 }} onClick={deletePost} />
            </div>
          )}
        </div>

        <div className="postDescription">
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>  

        </div>

        <Comments commentProp={comments} pid={postId} />

      </div>
    </div>
  );
};

export default Single;
