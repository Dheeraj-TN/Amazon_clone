import React from "react";
import { Link } from "react-router-dom";
import Accesories1 from "./Accesories1";
import Art1 from "./Art1";
import Notebooks1 from "./Notebooks1";
export const Stationary = () => {
  return (
    <div className="stationary">
      <h1>stationary</h1>
    </div>
  );
};

export const Notebooks = () => {
  return (
    <Link to="/notebooks">
      <div className="stationary">
        <Notebooks1 />
      </div>
    </Link>
  );
};

export const Art = () => {
  return (
    <Link to="/arts">
      <div className="stationary">
        <Art1 />
      </div>
    </Link>
  );
};

export const Accessories = () => {
  return (
    <Link to="/accessories">
      <div className="stationary">
        <Accesories1 />
      </div>
    </Link>
  );
};
