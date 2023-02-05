import React from "react";
import { Link } from "react-router-dom";
import Men1 from "./Men1";
import Women1 from "./Women1";
import Kids1 from "./Kids1";
export const Clothing = () => {
  return (
    <div className="clothing">
      <h1>Clothing</h1>
    </div>
  );
};

export const Men = () => {
  return (
    <Link to="/men">
      <div className="clothing">
        <Men1 />
      </div>
    </Link>
  );
};

export const Women = () => {
  return (
    <Link to="/women">
      <div className="clothing">
        <Women1 />
      </div>
    </Link>
  );
};

export const Kids = () => {
  return (
    <Link to="/kids">
      <div className="clothing">
        <h1>Clothing Component</h1>
        <Kids1 />
      </div>
    </Link>
  );
};
