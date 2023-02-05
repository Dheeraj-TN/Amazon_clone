import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import db from "./firebase";
// import { getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import HorizontalScroll from "react-horizontal-scrolling";
import Products from "./Products";
import Header2 from "./components/Header2";
import { useEffect, useState } from "react";
function Home() {
  const showToast = () => {
    toast("hello");
  };

  useEffect(() => {
    showToast();
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        {/* <img className='home__image' src='https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg' alt=''/> */}
        <Carousel
          autoPlay
          infinteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img
              className="home__image"
              loading="lazy"
              src="https://links.papareact.com/gi1"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/71g6saMCOEL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              loading="lazy"
              src="	https://m.media-amazon.com/images/I/51JPU2nsLSL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              loading="lazy"
              src="	https://m.media-amazon.com/images/I/61mZ60Ci3YL._SX3000_.jpg"
              alt=""
            />
          </div>
        </Carousel>
        <div className="home__row">
          <Products
            id="12345"
            title="The lean Startup"
            image="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY436_FMwebp_QL65_.jpg"
            price={29.99}
            rating={4}
          />
          <Products
            id="67891"
            title="Xiamo note book pro"
            image="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY400_.jpg"
            price={400}
            rating={3}
          />

          {/* <Products/> */}
        </div>
        <div className="home__row">
          <Products
            id="111213"
            title="Men's Oxiift walkimg shoes"
            image="https://images-eu.ssl-images-amazon.com/images/I/31yz6TdlRAS._AC_SR400,600_.jpg"
            price={50}
            rating={4}
          />
          <Products
            id="141516"
            title="Fossil Gen 6 Venture Edition Digital Black Dial Men's Watch-FTW4068"
            image="https://m.media-amazon.com/images/I/71viRsrDPaL._UX679_.jpg"
            price={283.83}
            rating={4}
          />
          <Products
            id="171819"
            title="Xiaomi Mi Band 3/ Mi Band 4 Watch Silicone Strap Band Bracelet"
            image="https://m.media-amazon.com/images/I/61mjn2zcSgS._SX679_.jpg"
            price={2}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Products
            id="12345"
            title="Samsung 32-inch(80cm) Odyssey G7 Gaming, 240 Hz, 1ms, 2K, Curved Monitor, HAS, WQHD, QLED, HDR600, G-Sync Compatible, 2560 x 1440 Pixels (LC32G75TQSWXXL, Black)"
            image="https://m.media-amazon.com/images/I/71LpkdG1xUL._AC_UY436_FMwebp_QL65_.jpg"
            price={614.45}
            rating={5}
          />
        </div>
        <HorizontalScroll>
          <div className="home__row">
            <Products
              id="171889"
              title="American Tourister Ivy Polypropylene 68 cms Black Hardsided Check-in Luggage"
              image="https://m.media-amazon.com/images/I/71oTNUSNGEL._AC_SY400_.jpg"
              price={40}
              rating={4}
            />
            <Products
              id="191819"
              title="AMERICAN TOURISTER Kiza 4 Wheel Check-in Suitcase Combo "
              image="https://m.media-amazon.com/images/I/916ziG6saPL._AC_SY200_.jpg"
              price={50}
              rating={4}
            />
            <Products
              id="171719"
              title="Reebok Smartwatch- Full-Touch HD Display, SpO2 Sensor,BP & Sleep Monitor, Durable Spindrop Strap"
              image="https://m.media-amazon.com/images/I/615fBi41SoL._AC_SY400_.jpg"
              price={50}
              rating={2}
            />
            <Products
              id="271819"
              title="Valentine Gift By Shining Diva"
              image="https://m.media-amazon.com/images/I/61ZA0394h7L._AC_SY400_.jpg"
              price={5}
              rating={4}
            />
            <Products
              id="171819"
              title="Build, Don't Talk: Things You Wish You Were Taught in"
              image="https://m.media-amazon.com/images/I/41HftEqgaeL._SX324_BO1,204,203,200_.jpg"
              price={2}
              rating={5}
            />
            <Products
              id="179819"
              title="GET EPIC SHIT DONE"
              image="https://m.media-amazon.com/images/I/41l1SqjuqJL._SX327_BO1,204,203,200_.jpg"
              price={5}
              rating={4}
            />
            <Products
              id="178819"
              title="Life's Amazing Secrets: How to Find Balance and Purpose in Your Life"
              image="https://m.media-amazon.com/images/I/51PJyvcfPGL._SX321_BO1,204,203,200_.jpg"
              price={2}
              rating={4}
            />
          </div>
        </HorizontalScroll>
        <HorizontalScroll>
          <div className="home__row">
            <Products
              id="101889"
              title="Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen 15.6 (39.62cm) FHD Thin & Light Laptop"
              image="https://m.media-amazon.com/images/I/71acOQV0elL._SX679_.jpg"
              price={700}
              rating={4}
            />
            <Products
              id="291819"
              title="Apple iPhone 14 Pro 1TB Deep Purple"
              image="https://m.media-amazon.com/images/I/61HHS0HrjpL._SX679_.jpg"
              price={2130}
              rating={5}
            />
            <Products
              id="1901719"
              title="2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid"
              image="https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg"
              price={1100}
              rating={4}
            />
            <Products
              id="371819"
              title="2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch"
              image="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
              price={1000}
              rating={5}
            />
            <Products
              id="171849"
              title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Silver (4th Generation)"
              image="https://m.media-amazon.com/images/I/8124D1qS2UL._SX679_.jpg"
              price={980}
              rating={4}
            />
            <Products
              id="189819"
              title="Google Pixel 6a 5G (Sage, 6GB RAM, 128GB Storage)"
              image="https://m.media-amazon.com/images/I/61dNAU6PgxL._SX679_.jpg"
              price={500}
              rating={4}
            />
            <Products
              id="1341819"
              title="Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) "
              image="https://m.media-amazon.com/images/I/71J8tz0UeJL._SX679_.jpg"
              price={1120}
              rating={5}
            />
          </div>
        </HorizontalScroll>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
