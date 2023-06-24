import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrderListDetail.css";
export default function OrderDetailPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await fetch(`http://localhost:3001/store/orders/${id}`);

      if (response.ok) {
        const order = await response.json();
        console.log("Order detail data:", orderDetailData);
        setOrder(order);
      } else {
        console.error(
          "Failed to fetch order:",
          response.status,
          response.statusText
        );
      }
    };

    fetchOrder();
  }, [id]);

  return (
    <div>
      {order && (
        <div>
          <h2>Order {order.id}</h2>
        </div>
      )}
    </div>
  );
}
