import React, { useContext, useState } from "react";
// import clsx from "clsx";
import "./Styles/navbar2.css";
import { Link } from "react-router-dom";
// import { Menu, Search, User, LogIn, X, ShoppingCart } from "react-feather";

// import { UserContext, CartContext } from "@/App";
// import Button from "@/components/Button";
// import Input from "@/components/Input";
// import UserDropDown from "@/components/UserDropDown";
// import api from "@/api";
// import useClickOutside from "@/hooks/useClickOutside";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { cart, cartDispatch } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useClickOutside(() => setShowMenu(false));

  return (
    <nav className={clsx("navbar")} ref={navbarRef}>
      <div className="brand">
        <Link to="/">
          <h3>BRAND</h3>
        </Link>
      </div>

      <div className="menu">
        <Link to="/cart" className="cart">
          <ShoppingCart width={24} height={24} />
          {cart.products.length ? (
            <div className="cart-count">{cart.products.length}</div>
          ) : null}
        </Link>
        {user && (
          <UserDropDown
            user={user}
            onLogout={() => {
              api.logoutUser();
              setUser(null);
              cartDispatch({ type: "RESET" });
            }}
          />
        )}
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <X width={24} height={24} className="close-icon" />
          ) : (
            <Menu width={24} height={24} className="menu-icon" />
          )}
        </button>
      </div>

      <div className={clsx("nav-links", showMenu && "show")}>
        <ul>
          <NavLink to="/products?category=men">Men</NavLink>
          <NavLink to="/products?category=women">Women</NavLink>
          <NavLink to="/products">All Products</NavLink>
        </ul>
        <div className="search-input">
          <Input icon={<Search />} placeholder="Search..." />
        </div>
        {!user && (
          <div className={clsx("auth-links", showMenu && "show")}>
            <ul>
              <li>
                <Link to="/login">
                  <Button secondary className="btn secondary">
                    <LogIn width={20} height={20} className="mr-2" />
                    Login
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <Button className="btn primary">
                    <User width={20} height={20} className="mr-2" />
                    Register
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ children, to }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}
