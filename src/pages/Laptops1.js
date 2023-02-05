import React from "react";
import Products from "../Products";
function Laptops1() {
  return (
    <div>
      <h1>laptops of electronics</h1>
      <div className="home__row">
        <Products
          id="333331"
          title="Samsung Galaxy Book2 360 Intel 12th Gen i5 EvoTM 33.78cm  AMOLED 2 in 1 touch screen Laptop"
          image="https://m.media-amazon.com/images/I/61Cgi5nM7JL._AC_UY327_FMwebp_QL65_.jpg"
          price={94990}
          rating={4}
        />
        <Products
          id="333332"
          title="Samsung Galaxy Book2 Pro Intel 12th Gen i5 EvoTM 33.78cm AMOLED Thin & Light Laptop "
          image="https://m.media-amazon.com/images/I/61kHFnxyAhL._AC_UY327_FMwebp_QL65_.jpg"
          price={93990}
          rating={4}
        />
        <Products
          id="333333"
          title="HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM"
          image="https://m.media-amazon.com/images/I/81zoyHn5uJL._AC_UL480_FMwebp_QL65_.jpg"
          price={35990}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Products
          id="333334"
          title="Lenovo IdeaPad D330 Intel Celeron N4020 10.1(25cm) HD IPS Detachable 2-in-1 Laptop"
          image="https://m.media-amazon.com/images/I/51gkDWHPvQL._AC_UY327_FMwebp_QL65_.jpg"
          price={21499}
          rating={5}
        />
        <Products
          id="333335"
          title="Lenovo IdeaPad Slim 5 AMD Ryzen 7 5700U 15.6(39.62cm) FHD IPS Laptop "
          image="https://m.media-amazon.com/images/I/61kYrhv-t-L._AC_UY327_FMwebp_QL65_.jpg"
          price={62829}
          rating={4}
        />
        <Products
          id="333336"
          title="Acer Predator Helios 500 Gaming Laptop"
          image="https://m.media-amazon.com/images/I/81oz+NZ4QLL._AC_UY327_FMwebp_QL65_.jpg"
          price={432159}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Products
          id="333337"
          title="Acer Extensa 15 Lightweight Laptop "
          image="https://m.media-amazon.com/images/I/51Z-CqWUN1L._AC_UY327_FMwebp_QL65_.jpg"
          price={40990}
          rating={5}
        />
        <Products
          id="333338"
          title="ASUS Vivobook 14, 14.0-inch (35.56 cms) HD, Intel Core i3-1005G1 10th Gen, Thin and Light Laptop"
          image="https://m.media-amazon.com/images/I/71WuDXpTAlL._AC_UY327_FMwebp_QL65_.jpg"
          price={33990}
          rating={4.2}
        />
        <Products
          id="333339"
          title="ASUS Vivobook Pro 15 (2022), 15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 7 5800H, Thin & Light Laptop"
          image="https://m.media-amazon.com/images/I/71f0bjKSP0L._AC_UY327_FMwebp_QL65_.jpg"
          price={65990}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Products
          id="333340"
          title="Dell Vostro 3420 Laptop"
          image="https://m.media-amazon.com/images/I/51bqpP0jb5L._AC_UY327_FMwebp_QL65_.jpg"
          price={43990}
          rating={4}
        />
        <Products
          id="333341"
          title="Mi Notebook Pro "
          image="https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_UY327_FMwebp_QL65_.jpg"
          price={56490}
          rating={4}
        />
        <Products
          id="333342"
          title="Apple 2021 MacBook Pro "
          image="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY327_FMwebp_QL65_.jpg"
          price={296894}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Laptops1;
