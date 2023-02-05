// import React, { useState } from "react";
// import { data } from "./Products_Data.js";
// import "./SearchPage.css";
// function SearchPage() {
//   const [searchItem, setSearchItem] = useState("");
//   return (
//     <div className="searchPage">
//       <h1>Serach Page</h1>
//       <div className="template__conatiner">
//         {data
//           .filter((val) => {
//             if (val.title === " ") {
//               return val;
//             } else if (
//               val.title.toLowerCase().includes(searchItem.toLowerCase())
//             ) {
//               return val;
//             }
//           })
//           .map((val) => {
//             return (
//               <div className="template" key={val.id}>
//                 <img src={val.image} alt="" />
//                 <h3>{val.title}</h3>
//                 <p className="price">{val.price}</p>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default SearchPage;
