import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useMatch } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { data } from "./Data.js";
import logo from "./logo5.png";
import Home from "./Home";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { Navigation } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import Search from "./Search";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import {auth} from './firebase';
function Header() {
  const navigate = useNavigate();
  //const [user, loading, error] = useAuthState(auth);
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [products, setProducts] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const search_redirect = ({ naviagtion: { navigate } }) => {
    navigate("search", { searchItem });
  };
  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const results = data.filter((item) =>
  //     item.title.toLowerCase().includes(searchItem.toLowerCase())
  //   );
  //   setSearchResults(results);
  //   navigate("/search");
  // };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <LocationOnIcon className="location__icon" />
      <div className="header__option">
        <span className="header__optionLineOne">Hello</span>
        <span className="header__optionLineTwo">Select your address</span>
      </div>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search here"
          onChange={(event) => setSearchItem(event.target.value)}
        />

        <SearchIcon className="header__searchIcon" onClick={search_redirect} />

        {/* {searchResults.map((item, index) => (
          <tr>
            key={index}
            <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
          </tr>
        ))} */}
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Location</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="basket">
          <ShoppingCartIcon />
          <span className="header__basketCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
// https://seeklogo.com/images/S/shopaholic-logo-9C47425B94-seeklogo.com.gif
// <div className="template__conatiner">
//{data
//   .filter((val) => {
//     if (val.title.toLowerCase().includes(searchItem.toLowerCase())) {
//       return val;
//     }
//   })
//   .map((val) => {
//     return (
//       <div className="template" key={val.id}>
//         <img src={val.image} alt="" />
//         <h3>{val.title}</h3>
//         <p className="price">{val.price}</p>
//       </div>
//     );
//   })}
// </div>
//https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/2560px-Amazon-logo-white.svg.png
