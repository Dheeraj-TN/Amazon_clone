import React from "react";
import { Link } from "react-router-dom";
import Livingroom1 from "./Livingroom1";
import Kitchenroom1 from "./Kitchenroom1";
import Bedroom1 from "./Bedroom1";
export const Home_Decor = () => {
  return (
    <div className="home__decor">
      <h1>home decor</h1>
    </div>
  );
};

export const Living_room = () => {
  return (
    <Link to="/living__room">
      <div className="home__decor">
        <Livingroom1 />
      </div>
    </Link>
  );
};

export const Kitchen_dining = () => {
  return (
    <Link to="/kitchen__room">
      <div className="home__decor">
        <Kitchenroom1 />
      </div>
    </Link>
  );
};

export const Bedroom = () => {
  return (
    <Link to="/bedroom">
      <div className="home__decor">
        <Bedroom1 />
      </div>
    </Link>
  );
};
