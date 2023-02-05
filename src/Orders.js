import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import Products from "./Products";
import Order from "./Order";
import moment from "moment";
import CheckProduct from "./CheckProduct";
import CurrencyFormat from "react-currency-format";
import {
  collection,
  getDocs,
  onSnapshot,
  snapshotEqual,
  orderBy,
} from "firebase/firestore";
import { useStateValue } from "./StateProvider";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const prodRef = collection(db, "orders");
  useEffect(() => {
    if (user) {
      // prodRef.orderBy("created", "desc");
      onSnapshot(prodRef, (snapshot) => {
        // snapshot.docs.forEach((doc) => {
        //   items.push(doc.data(), doc.id);
        // });
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="order__container">
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
