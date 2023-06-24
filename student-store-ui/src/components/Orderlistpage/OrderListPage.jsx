import axios from "axios";
import { useEffect, useState } from "react";
import "./OrderListPage.css";
import "../OrderlistDetails/OrderListDetail";

export default function OrderListPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("http://localhost:3001/store/orders");

      if (response.ok) {
        const orders = await response.json();
        console.log("Order detail data:", orderDetailData);
        setOrders(orders);
      } else {
        console.error(
          "Failed to fetch orders:",
          response.status,
          response.statusText
        );
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      {orders && (
        <div>
          {/* <h2>Order {orders.id}</h2> */}
          <h3>Customer Details</h3>
          <p>Name: {orders.customer.name}</p>
          <p>Email: {orders.customer.email}</p>
          <h3>Items Ordered</h3>
          {orders.cart.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
