import React from "react";
import Products from "../Products";
function Womensgrooming1() {
  return (
    <div>
      <h1>Womens_grooming of beauty</h1>
      <div className="home__row">
        <Products
          id="444443"
          title="Beauté Secrets Nail Cutter Set, 18 Pieces Grooming Kit"
          image="https://m.media-amazon.com/images/I/81--ZAaKD7L._AC_UL480_FMwebp_QL65_.jpg"
          price={549}
          rating={4}
        />
        <Products
          id="444444"
          title="Syska SensoSafe Female Grooming Kit"
          image="https://m.media-amazon.com/images/I/51MibEmtXtL._AC_UL480_FMwebp_QL65_.jpg"
          price={1099}
          rating={4}
        />
        <Products
          id="444445"
          title="Philips Touch-Up HP6388 Eyebrows"
          image="https://m.media-amazon.com/images/I/51ydxFnVpUL._AC_UL480_FMwebp_QL65_.jpg"
          price={1296}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Womensgrooming1;
