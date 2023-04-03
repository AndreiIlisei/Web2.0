import React, { useState } from "react";
import axios from "axios";
import "../styles/write.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";


const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState("");
  const [cat, setCat] = useState(state?.cat || "");
  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="WritePage">
      <div className="bio_container">
        <input
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1> Publish</h1>
          <span>
            <b> Status </b> Draft
          </span>
          <span>
            <b> Visibility </b> Public
          </span>

          <input
            type="file"
            style={{ display: " none" }}
            name="file"
            id="file"
            className="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file"> Upload Image</label>

          <div className="buttons">
            <button> Save as draft</button>
            <button onClick={handleSubmit}> Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="art"
              id="art"
              checked={cat === "art"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="science"
              id="science"
              checked={cat === "science"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="">Travel</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="technology"
              id="technology"
              checked={cat === "technology"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor=""> Trips </label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
              checked={cat === "cinema"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor=""> Cinema </label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="design"
              id="design"
              checked={cat === "design"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor=""> Design </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
