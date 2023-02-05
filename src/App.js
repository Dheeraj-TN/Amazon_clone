import React, { Component } from "react";
import Header from "./Header";
import Header2 from "./components/Header2";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SearchPage from "./SearchPage";
import Orders from "./Orders";
import Signup from "./Signup";
import Footer from "./Footer";
import Search from "./Search";
import Sidebar from "./components/Sidebar";
import Sports from "./pages/Sports";
import { Clothing, Men, Women, Kids } from "./pages/Clothing";
import { Accessories, Art, Notebooks, Stationary } from "./pages/Stationary";
// import {
//   Bedroom,
//   Home_decor,
//   Kitchen_dining,
//   Living_room,
// } from "./pages/Home_decor";
import {
  Electronics,
  Laptops,
  Mobiles,
  Refrigerator,
  Tablets,
  Washing_machine,
} from "./pages/Electronics";
import {
  Beauty,
  Hair_care,
  Make_up,
  Mens_grooming,
  Perfumes,
  Skin_care,
  Womens_grooming,
} from "./pages/Beauty";
import Makeup from "./pages/Makeup";
import Men1 from "./pages/Men1";
import Women1 from "./pages/Women1";
import { Living_room, Kitchen_dining, Bedroom } from "./pages/Home_Decor";
// import { Home_Decor } from "./pages/Home_Decor";
import Kids1 from "./pages/Kids1";
import Notebooks1 from "./pages/Notebooks1";
import Art1 from "./pages/Art1";
import Accesories1 from "./pages/Accesories1";
import Livingroom1 from "./pages/Livingroom1";
// import Kitchenroom1 from "./pages/Kitchenroom1";
import Bedroom1 from "./pages/Bedroom1";
import Laptops1 from "./pages/Laptops1";
import Mobiles1 from "./pages/Mobiles1";
import Tablets1 from "./pages/Tablets1";
import Refrigerator1 from "./pages/Refrigerator1";
import Washingmachine1 from "./pages/Washingmachine1";
import Haircare1 from "./pages/Haircare1";
import Skincare1 from "./pages/Skincare1";
import Perfumes1 from "./pages/Perfumes1";
import Mensgrooming1 from "./pages/Mensgrooming1";
import Womensgrooming1 from "./pages/Womensgrooming1";

const promise = loadStripe(
  "pk_test_51MHzr0SAd63srqsxpFscqJBLsEF42GIQ81uGeQZ9Ou1zq1HXHjxLsKuKVnbQF0IBLqRIqDR0AaTVevib5aLldg0k00SgjughDE"
);
function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is -->>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Elements stripe={promise}>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/orders" element={<Orders />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          {/* header2 */}
          <Route exact path="/clothing" element={<Clothing />} />
          <Route exact path="/clothing/men" element={<Men />} />
          <Route exact path="/clothing/women" element={<Women />} />
          <Route exact path="/clothing/kids" element={<Kids />} />
          <Route exact path="/stationary" element={<Stationary />} />
          <Route exact path="/stationary/notebooks" element={<Notebooks />} />
          <Route exact path="/stationary/art" element={<Art />} />
          <Route
            exact
            path="/stationary/accessories"
            element={<Accessories />}
          />
          {/* <Route exact path="/home decor" element={<Home_Decor />} /> */}
          {/* <Route
            exact
            path="/home decor/living room"
            element={<Living_room />}
          /> */}
          <Route
            exact
            path="/home decor/kitchen dining"
            element={<Kitchen_dining />}
          />
          <Route exact path="/home decor/bedroom" element={<Bedroom />} />
          <Route exact path="/electronics" element={<Electronics />} />
          <Route exact path="/electronics/laptops" element={<Laptops />} />
          <Route exact path="/electronics/mobiles" element={<Mobiles />} />
          <Route exact path="/electronics/tablets" element={<Tablets />} />
          <Route
            exact
            path="/electronics/refrigerator"
            element={<Refrigerator />}
          />
          <Route
            exact
            path="/electronics/washing_machine"
            element={<Washing_machine />}
          />
          <Route exact path="/beauty" element={<Beauty />} />
          <Route exact path="/beauty/make_up" element={<Make_up />} />
          <Route exact path="/beauty/hair_care" element={<Hair_care />} />
          <Route exact path="/beauty/skin_care" element={<Skin_care />} />
          <Route exact path="/beauty/perfumes" element={<Perfumes />} />
          <Route
            exact
            path="/beauty/mens_grooming"
            element={<Mens_grooming />}
          />
          <Route
            exact
            path="/beauty/womens_grooming"
            element={<Womens_grooming />}
          />
          <Route exact path="/makeup" element={<Makeup />} />
          <Route exact path="/men" element={<Men1 />} />
          <Route exact path="/women" element={<Women1 />} />
          <Route exact path="/kids" element={<Kids1 />} />
          <Route exact path="/sports" element={<Sports />} />
          <Route exact path="/notebooks" element={<Notebooks1 />} />
          <Route exact path="/arts" element={<Art1 />} />
          <Route exact path="/accessories" element={<Accesories1 />} />
          <Route exact path="/livingroom" element={<Livingroom1 />} />

          <Route exact path="/bedroom" element={<Bedroom1 />} />
          <Route exact path="/laptops" element={<Mobiles1 />} />
          <Route exact path="/mobiles" element={<Bedroom1 />} />
          <Route exact path="/tablets" element={<Tablets1 />} />
          <Route exact path="/refrigerator" element={<Refrigerator1 />} />
          <Route exact path="/washing machine" element={<Washingmachine1 />} />
          <Route exact path="/hair care" element={<Haircare1 />} />
          <Route exact path="/skin care" element={<Skincare1 />} />
          <Route exact path="/perfumes" element={<Perfumes1 />} />
          <Route exact path="/mens grooming" element={<Mensgrooming1 />} />
          <Route exact path="/womens grooming" element={<Womensgrooming1 />} />
        </Routes>
        <Footer />
      </Router>
    </Elements>
  );
}

export default App;

// try to make boxes in boxes

//header2 dropdowns
//changes in sign in sentences
//logo

//pk_test_51MEjdlSAw1gwAGnVx72jos1ypTK8basHaWPmTuXXKeDzgPXl8o4SN4auloacNg9kfGwQ9zJtI90vFllubqTkwOyZ00W3RsIVpe
