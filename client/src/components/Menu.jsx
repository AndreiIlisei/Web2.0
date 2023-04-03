import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/home.css";
import axios from "axios";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menuContainer">
      <h1> Other posts you like </h1>
      {posts.map((post) => (
        <div className="postContainer" key={post.id}>
          <img src={post.img} alt="picture" /> <h2> {post.title}</h2>
          <button> Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
