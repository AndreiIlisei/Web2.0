// import React, { useState } from "react";
// import "../styles/register.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [inputs, setIputs] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const [err, setError] = useState(null);

//   const handleChange = (e) => {
//     setIputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     navigate("/login")
//     try {
//       await axios.post("/auth/register", inputs);

//     } catch (err) {
//       setError(err.response.data);
//     }
//   };

//   console.log(inputs);

//   return (
//     <div className="registerContainer">
//       {/* <img className="postImg" src="/images/img-1.jpg" alt="picture" /> */}
//       <div className="form-container">
//         <form className="form">
//           <input
//             className="form-input"
//             name="username"
//             required
//             type="text"
//             placeholder="username"
//             onChange={handleChange}
//           />
//           <input
//             className="form-input"
//             name="email"
//             required
//             type="email"
//             placeholder="email"
//             onChange={handleChange}
//           />
//           <input
//             className="form-input"
//             name="password"
//             required
//             type="password"
//             placeholder="password"
//             onChange={handleChange}
//           />
//           <button className="form-input-btn" onClick={handleSubmit}> Register </button>

//           {err && <p>{err}</p>}
//           <span>
//             Do you haven an account? <Link to="/login">Login</Link>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bgImg from './../img/img1.jpg';

const Register = () => {

  const [inputs, setIputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setIputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/login")
    try {
      await axios.post("/auth/register", inputs);

    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='background'>
      <div className='registrationForm'>
        <div className="register">
          <div className="col-1">
            <h2>Sign In</h2>
            <span>register and enjoy the service</span>

            <form id='form' className='flex flex-col'>
              <input type="text" name="username"
                required placeholder='username'
                onChange={handleChange} />
              <input
                name="email"
                required
                type="email"
                placeholder="email"
                onChange={handleChange}
              />
              <input
                className="form-input"
                name="password"
                required
                type="password"
                placeholder="password"
                onChange={handleChange}
              />

              <button onClick={handleSubmit} className='btn'>Register</button>
              {err && <p>{err}</p>}
              <span>
                Do you have an account? <Link to="/login">Login</Link>
              </span>
            </form>

          </div>
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}
export default Register;