import React from "react";
import Products from "../Products";
function Notebooks1() {
  return (
    <div>
      <h1>notebooks page of stationary</h1>
      <div className="home__row">
        <Products
          id="333355"
          title="Lauret Blanc Notebook - A5 Size"
          image="https://m.media-amazon.com/images/I/71P+9IpKnWL._AC_UL480_FMwebp_QL65_.jpg"
          price={399}
          rating={4}
        />
        <Products
          id="333356"
          title="Classmate Soft Cover 6 Subject Spiral Binding Notebook"
          image="https://m.media-amazon.com/images/I/61NUA0O7WTL._AC_UL480_FMwebp_QL65_.jpg"
          price={149}
          rating={4}
        />
        <Products
          id="333357"
          title="Luxor 5 Subject Spiral Premium Exercise Notebook, Single Ruled"
          image="https://m.media-amazon.com/images/I/71mb8aqR8SL._AC_UL480_FMwebp_QL65_.jpg"
          price={336}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Products
          id="333358"
          title="Classmate Notebook "
          image="https://m.media-amazon.com/images/I/71qMFxtcfdL._AC_UL480_FMwebp_QL65_.jpg"
          price={160}
          rating={5}
        />
        <Products
          id="333359"
          title="Paperkraft Expression 5 Subject"
          image="https://m.media-amazon.com/images/I/71cegIQWxQL._AC_UL480_FMwebp_QL65_.jpg"
          price={250}
          rating={4.5}
        />
        <Products
          id="333360"
          title="Jiada Unicorn Print Wirebound Spiral Diary Notebook"
          image="https://m.media-amazon.com/images/I/816PO1ZLMzL._AC_UL480_FMwebp_QL65_.jpg"
          price={299}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Products
          id="333361"
          title="SOLO 4 Pack Kraft Board Spiral Notebook"
          image="https://m.media-amazon.com/images/I/71a3x9PEOoL._AC_UL480_FMwebp_QL65_.jpg"
          price={500}
          rating={5}
        />
        <Products
          id="333362"
          title="Happening Hippo Notebook "
          image="https://m.media-amazon.com/images/I/51VNf6vugML._AC_UL480_FMwebp_QL65_.jpg"
          price={249}
          rating={4}
        />
        <Products
          id="333363"
          title="LOVELY Little Explorer Edge Printed Ruled Notebook"
          image="https://m.media-amazon.com/images/I/61tg86wmXPL._AC_UL480_FMwebp_QL65_.jpg"
          price={699}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Products
          id="333364"
          title="CLAPONE A5 size Black Hardcover Spiral Plain Travel Writing Notebooks "
          image="https://m.media-amazon.com/images/I/618OTeXUexL._AC_UL480_FMwebp_QL65_.jpg"
          price={369}
          rating={4}
        />
        <Products
          id="333365"
          title="WOODSNIPE Big Maths Square Ruled Notebooks"
          image="https://m.media-amazon.com/images/I/617i9GiXPES._AC_UL480_FMwebp_QL65_.jpg"
          price={200}
          rating={4}
        />
        <Products
          id="333366"
          title="COI Note Pad/Memo Book"
          image="https://m.media-amazon.com/images/I/41oLhpKArFL._AC_UL480_FMwebp_QL65_.jpg"
          price={198}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Notebooks1;
