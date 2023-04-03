// import { React, useContext } from "react";
// import "../styles/navbar.css";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/authContext";

// const Overlay = (props) => {
//   const { currentUser, logout } = useContext(AuthContext);

//   return (
//     <div
//       className={
//         props.toggleData ? "navigation_overlay_active" : "navigation_overlay"
//       }
//     >
//       <Link onClick={props.toggleData} className="link" to={"/write"}>
//         <p data-text="Write"> Write </p>
//       </Link>
//       <Link onClick={props.toggleData} className="link" to={"/"}>
//         <p data-text="home"> Home </p>
//       </Link>

//       {currentUser ? (
//         <button onClick={logout}>Logout</button>
//       ) : (
//         <Link onClick={props.toggleData} className="link" to={"/login"}>
//           <button className="loginButton" data-text="login">
//             Login
//           </button>
//         </Link>
//       )}

//       <Link className="link" to="/?cat=science">
//         <h6>SCIENCE</h6>
//       </Link>

//       <Link
//         onClick={props.toggleData}
//         className={currentUser ? "link_not" : "link"}
//         to={"/register"}
//       >
//         <button className="loginButton" data-text="Register">
//           Register
//         </button>
//       </Link>

//       <div className="backgroundImage"></div>
//       <span>{currentUser?.username}</span>
//     </div>
//   );
// };

// export default Overlay;
