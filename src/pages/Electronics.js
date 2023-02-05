import React from "react";
import { Link } from "react-router-dom";
import Laptops1 from "./Laptops1";
import Mobiles1 from "./Mobiles1";
import Refrigerator1 from "./Refrigerator1";
import Tablets1 from "./Tablets1";
import Washingmachine1 from "./Washingmachine1";
export const Electronics = () => {
  return (
    <div className="electronics">
      <h1>electronics</h1>
    </div>
  );
};

export const Laptops = () => {
  return (
    <Link to="/laptops">
      <div className="electronics">
        <Laptops1 />
      </div>
    </Link>
  );
};

export const Mobiles = () => {
  return (
    <Link to="/mobiles">
      <div className="electronics">
        <Mobiles1 />
      </div>
    </Link>
  );
};

export const Tablets = () => {
  return (
    <Link to="/tablets">
      <div className="electronics">
        <Tablets1 />
      </div>
    </Link>
  );
};
export const Refrigerator = () => {
  return (
    <Link to="/refrigerator">
      <div className="electronics">
        <Refrigerator1 />
      </div>
    </Link>
  );
};
export const Washing_machine = () => {
  return (
    <Link to="/washing machine">
      <div className="electronics">
        <Washingmachine1 />
      </div>
    </Link>
  );
};
