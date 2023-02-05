import React from "react";
import { Link } from "react-router-dom";
import Haircare1 from "./Haircare1";
import Makeup from "./Makeup";
import Mensgrooming1 from "./Mensgrooming1";
import Perfumes1 from "./Perfumes1";
import Skincare1 from "./Skincare1";
import Womensgrooming1 from "./Womensgrooming1";
import Products from "../Products";
export const Beauty = () => {
  return (
    <div className="beauty">
      <h1>beauty</h1>
    </div>
  );
};

export const Make_up = () => {
  return (
    <Link to="/makeup">
      <div className="beauty">
        <Makeup />
      </div>
    </Link>
  );
};
export const Hair_care = () => {
  return (
    <Link to="/hair care">
      <div className="beauty">
        <Haircare1 />
      </div>
    </Link>
  );
};
export const Skin_care = () => {
  return (
    <Link to="/skin care">
      <div className="beauty">
        <Skincare1 />
      </div>
    </Link>
  );
};
export const Perfumes = () => {
  return (
    <Link to="/pefumes">
      <div className="beauty">
        <Perfumes1 />
      </div>
    </Link>
  );
};
export const Mens_grooming = () => {
  return (
    <Link to="/mens grooming">
      <div className="beauty">
        <Mensgrooming1 />
      </div>
    </Link>
  );
};
export const Womens_grooming = () => {
  return (
    <Link to="/womens grooming">
      <div className="beauty">
        <Womensgrooming1 />
      </div>
    </Link>
  );
};
