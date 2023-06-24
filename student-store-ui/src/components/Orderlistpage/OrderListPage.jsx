import axios from "axios";
import { useEffect, useState } from "react";
import "./OrderListPage.css";
import "../OrderlistDetails/OrderListDetail";

export default function OrderListPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API
    axios.get("/store/orders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          {/* Display order info here */}
          {/* Clicking on order ID takes you to order details page */}
          <a href={`/orders/${order.id}`}>Order #{order.id}</a>
        </div>
      ))}
    </div>
  );
}
