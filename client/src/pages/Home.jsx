import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/home.css";
import axios from "axios";
import { Button } from "../components/Button";
import Posts from "../components/Posts"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="posts">
      <div className='hero-container'>
        <video src='../../video/video-1.mp4' autoPlay loop muted />
    
          <h1>LET THE WOLRD KNOW YOU </h1>
          <p>Post your adventures alongside mine</p>
   
        <div className='hero-btns'>
          <Link
            to='/login'
          >
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <Posts posts={posts} />
    </div>
  );
};

export default Home;
