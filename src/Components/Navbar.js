import React from "react";
import "./Styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <a href="index.html">
            <h2>Swaggin</h2>
          </a>
        </div>
        <div className="header-list">
          <nav className="header-list-nav">
            <ul>
              <li>
                <a href="about.html">Cart</a>
              </li>
              <li>
                <a href="about.html">SignUp</a>
              </li>
            </ul>
          </nav>
          {/* <div className="header-list-icon">
            <a href="#">
              <i className="fa fa-bag-shopping"></i>
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import React, { useState } from "react";
// import { FaBars, FaTimes, FaUserPlus, FaShoppingCart } from "react-icons/fa";
// import "./Styles/Header.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     console.log("Menu Open:", !menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <a href="/">Swaggin</a>
//         </div>
//         <div className="navbar-links">
//           <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
//             <li className="nav-item">
//               <a href="#home" className="nav-link">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#about" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#services" className="nav-link">
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#contact" className="nav-link">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-icons">
//           <a href="#signup" className="nav-icon">
//             <p>SignUp</p>
//           </a>
//           <a href="#cart" className="nav-icon">
//             <p>Cart</p>
//             {/* <FaShoppingCart size={20} /> */}
//           </a>
//           <button className="menu-icon" onClick={toggleMenu}>
//             {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
