import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OrderDetailsPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`/store/orders/${id}`).then((response) => {
      setOrder(response.data);
    });
  }, [id]);

  return (
    <div>
      {order && <p>{order.id}</p>} {/* Display order details here */}
    </div>
  );
}
