import React from "react";
import Products from "../Products";
function Mensgrooming1() {
  return (
    <div>
      <h1>mens_grooming of beauty</h1>
      <div className="home__row">
        <Products
          id="555551"
          title="Zlade Ballistic Manscaping Body Trimmer for Men "
          image="https://m.media-amazon.com/images/I/6168sgKdyGL._AC_UL480_FMwebp_QL65_.jpg"
          price={3499}
          rating={4}
        />
        <Products
          id="555552"
          title="Park Avenue Essential Grooming Collection"
          image="https://m.media-amazon.com/images/I/71Zral8OYUL._AC_UL480_FMwebp_QL65_.jpg"
          price={276}
          rating={4}
        />
        <Products
          id="555553"
          title="The Man Company Activated Charcoal Face Wash for Men"
          image="https://m.media-amazon.com/images/I/511yAirvs0L._AC_UL480_FMwebp_QL65_.jpg"
          price={247}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Mensgrooming1;
