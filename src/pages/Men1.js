import React from "react";
import Products from "../Products";
function Men1() {
  return (
    <div>
      <h1>I am men clothing</h1>
      <div className="home__row">
        <Products
          id="111111"
          title="Ben Martin Men's Relaxed Jeans"
          image="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/7/q/w/s-all-rbc-white-one-nb-nicky-boy-original-imagjz5bgpmhcaea.jpeg?q=70"
          price={800}
          rating={4.5}
        />
      </div>
    </div>
  );
}

export default Men1;
