import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigationbar from "../Navigationbar";
import Footer from "./Footer";

const UserOrders = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      const parseToken = JSON.parse(token);
      const userId = parseToken._id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/orders/user/${userId}`,
          { headers: { Authorization: `Bearer ${parseToken.token}` } }
        );
        setOrders(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return (
      <div className="animate-pulse max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="h-48 bg-gray-400"></div>
        <div className="px-6 py-4">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2 mt-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return <div>Go shopping</div>;
  }

  return (
    <div>
      <Navigationbar />
      <div className="min-h-[100vh] mt-[6rem] flex flex-col justify-center items-center">
        <h2>User Orders</h2>
        <div className="flex flex-col flex-wrap justify-center items-center">
          {orders.map((order, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Order {index + 1}</div>
                <p>Status: {order.status}</p>
                <p>Total Amount: {order.amount}</p>
                <h4 className="font-bold mt-2 mb-1">Products:</h4>
                {order.products.map((product, i) => (
                  <p key={i}>
                    Product ID: {product.productId}, Quantity:{" "}
                    {product.quantity}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserOrders;
