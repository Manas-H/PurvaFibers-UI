import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../../requestMethod";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sucess = () => {
  const address = useSelector((state) => state.address);
  console.log(typeof address);
  const location = useLocation();
  const { stripeData, products } = location.state;

  const data = stripeData;
  console.log(data);
  const cart = products;
  console.log(cart.products.products.cartItems);

  const Token = localStorage.getItem("token");
  const parseToken = JSON.parse(Token);
  const userId = parseToken._id;
  const currentUser = userId;
  console.log(currentUser);
  const [orderId, setOrderId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post(
          "/orders/",
          {
            userId: currentUser,
            products: Object.values(cart.products.products.cartItems).map(
              (item) => ({
                productId: item._id,
                quantity: item.qty,
              })
            ),
            amount: cart.total,
            address: address,
          },
          { headers: { Authorization: `Bearer ${parseToken.token}` } }
        );
        console.log("data: ", res.data);
        setOrderId(res.data._id);
        setTimeout(() => {
          navigate("/cart");
        }, [1000]);
      } catch (error) {
        console.error("Error creating order:", error);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser, address, parseToken.token, navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      {/* <Link to="/cart">
        <div className="text-black" style={{ padding: 10, marginTop: 20 }}>
          Go to Homepage
        </div>
      </Link> */}
    </div>
  );
};

export default Sucess;
