import React, { useState } from "react";
// import "../styles/login.css";
import "../styles/register.css";
import bgImg from './../img/img1.jpg';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setIputs] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setIputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='background'>
      <div className='registrationForm'>
        <div className="register">
          <div className="col-1">
            <h2>Login</h2>

            <form id='form' className='flex flex-col'>
              <input type="text" name="username"
                required placeholder='username'
                onChange={handleChange} />
              <input
                className="form-input"
                name="password"
                required
                type="password"
                placeholder="password"
                onChange={handleChange}
              />
              <button onClick={handleSubmit} className='btn'>Login</button>
              {err && <p>{err}</p>}
            </form>

            <span>
              Don't you have an account? <Link to="/register">Register</Link>
            </span>

          </div>
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
