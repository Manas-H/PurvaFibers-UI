import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/cart.css";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import {
  removeFromCartAsync,
  // decreaseCart,
  // addToCartAsync,
  getTotals,
  // fetchCartAsync,
} from "../redux/cartReducer";
import StripeCheckout from "react-stripe-checkout";
import img from "../images/pfi.png";
import { userRequest } from "../../requestMethod";
import Navigationbar from "../Navigationbar";
import Footer from "../pages/Footer";
import OrderDetails from "../forms/OrderDetails";

const TopBottom = styled.div`
  display: block;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Summary = styled.div`
  width: 100%;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

const Button = styled.button`
  min-width: 72%;
  margin: 1px 17%;
  padding: 4px;
  background-color: white;
  color: black;
  font-weight: 600;
`;
// const StripeKey = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const address = useSelector((state) => state.address);
  console.log("this is address: ", address);

  // const cartItems = cart.products ? cart.products.cartItems : {};
  // console.log("cartItems: ", cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  // console.log("this is stripetOKEN: ", stripeToken);

  useEffect(() => {
    // Fetch cart data when the component mounts
    dispatch(getTotals());
  }, [dispatch]);

  useEffect(() => {
    if (address && Object.keys(address).length > 0) {
      setIsAddressSubmitted(true);
    }
  }, [address]);
  // console.log(cart);
  // useEffect(() => {
  //   console.log("this is key: ",process.env.REACT_APP_STRIPE);
  // }, []);
  useEffect(() => {
    const makeRequest = async () => {
      setIsProcessing(true);
      const data = localStorage.getItem("token");
      const parseData = JSON.parse(data);
      const email = parseData.email;
      // console.log("this is email: ", email);
      console.log("this is the key");
      try {
        console.log("this is the key1");
        if (stripeToken) {
          const res = await userRequest.post("/checkout/payment", {
            email: email,
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          });

          Object.values(cart.products.products.cartItems).forEach((product) => {
            dispatch(removeFromCartAsync(product._id));
          });

          navigate("/success", {
            state: { stripeData: res.data, products: cart },
          });

          console.log("this is re:", res.data, cart);
        }
      } catch (error) {
        console.error("Error making payment request:", error);
      } finally {
        setIsProcessing(false);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken, cart.total, cart, navigate, dispatch]);

  // const handleAddToCart = (product) => {
  //   dispatch(addToCartAsync(product));
  // };

  // const handleDecreaseCart = (product) => {
  //   dispatch(decreaseCart(product));
  // };
  const handleRemoveFromCart = (product) => {
    console.log("this is remove p: ", product);
    dispatch(removeFromCartAsync(product._id));
  };

  const isAddressEmpty = (address) => {
    return (
      !address.street ||
      !address.city ||
      !address.state ||
      !address.zip ||
      !address.country
    );
  };

  console.log("this isproduct: ", cart.products);
  return (
    <div>
      <Navigationbar />
      {/* {isLoading ? ( */}
      {isProcessing && ( 
        <div className="cart-container loading-overlay">
          <p>Processing...</p>
        </div>
      )}
      <div className="cart-container">
        <div className="top">
          <h3>Shopping Cart</h3>
        </div>
        {Object.values(cart.products.products.cartItems).length === 0 ? (
          <div className="wrapper">
            <div className="cart-empty">
              <p>Your Cart is currently Empty</p>
              <div className="start-shopping">
                <Link to="/" className="shop">
                  <FaArrowLeft />
                  <span>Start Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="wrapper">
            <div className="overflow-y-hidden">
              <TopBottom className="info">
                {cart.products.products.cartItems &&
                  Object.values(cart.products.products.cartItems).map(
                    (product) => (
                      <div className="product" key={product._id}>
                        <div className="product-details">
                          {/* Assuming product.images is an array, you can access the first image like this */}
                          {product.images && product.images.length > 0 && (
                            <img src={product.images[0]} alt="Product" />
                          )}
                          <div className="details">
                            <p className="product_name">
                              <span>Product</span> {product.name}{" "}
                            </p>
                            <p className="product_id">ID: {product._id}</p>
                            <div className="price_details">
                              <div className="product-amount-quan">
                                <p className="product-quan-title">Quantity:</p>
                                {/* <AiOutlinePlus
                            onClick={() => handleAddToCart(product)}
                          /> */}
                                <p className="product-quantity">
                                  {product.qty}
                                </p>{" "}
                                {/* Assuming cartQuantity is stored in 'qty' */}
                                {/* <AiOutlineMinus
                            onClick={() => handleDecreaseCart(product)}
                          /> */}
                              </div>
                              <div className="product-price">
                                <p>Price: {product.price}rs </p>{" "}
                                {/* Assuming product price is stored in 'price' */}
                                <p>Total: {product.price * product.qty}rs</p>
                              </div>
                            </div>
                          </div>
                          <div className="delete-icon text-red-700 hover:bg-red-700 hover:text-white flex justify-center items-center w-[100%] md:w-10 md:h-40 h-3 py-3 md:py-0">
                            <AiOutlineDelete
                              onClick={() => handleRemoveFromCart(product)}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </TopBottom>
              <TopBottom className="info">
                <div className="product">
                  <div className="product-details">
                    <img
                      src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                      alt="Products"
                    />
                    <div className="details">
                      <p className="product_name">Product</p>
                      <p className="product_id">ID:</p>
                      <div className="price_details">
                        <div className="product-amount-quan">
                          <p className="product-quan-title">Quantity:</p>
                          <AiOutlinePlus />
                          <p className="product-quantity"> 122</p>
                          <AiOutlineMinus />
                        </div>
                        <div className="product-price">
                          <p>Price:</p>$ 1222
                        </div>
                      </div>
                    </div>
                    <div className="delete-icon">
                      <AiOutlineDelete />
                    </div>
                  </div>
                </div>
              </TopBottom>
            </div>

            <div>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>{cart.total}rs</SummaryItemPrice>
                </SummaryItem>
                {/* <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem> */}
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>200rs</SummaryItemPrice>
                </SummaryItem>
                {/* {address && Object.keys(address).length > 0 && ( */}
                {isAddressSubmitted && !isAddressEmpty(address) && (
                  <div className="flex w-full">
                    <p className="pr-2">Address:</p>
                    <div className="flex item-center cursor-pointer w-52">
                      <div>
                        <p className="">
                          {address.street},{address.city},{address.state},
                        </p>
                        <p>
                          {address.zip},{address.country}
                        </p>
                      </div>
                      <div className=" items-center pl-2 mt-1 group-hover:block cursor-pointer">
                        <FaEdit
                          className="hover:opacity-40"
                          onClick={handlePlaceOrder}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>{cart.total - 200}rs</SummaryItemPrice>
                </SummaryItem>
                {isAddressSubmitted && !isAddressEmpty(address) ? (
                  <StripeCheckout
                    token={onToken}
                    stripeKey={process.env.REACT_APP_STRIPE}
                    name="Purva"
                    image={img}
                    billingAddress
                    shippingAddress
                    description={`your total is ${cart.total}`}
                    amount={cart.total * 100}
                  >
                    <Button>Pay Now</Button>
                  </StripeCheckout>
                ) : (
                  <Button onClick={handlePlaceOrder}>Place Order</Button>
                )}
              </Summary>
            </div>
            {isModalOpen && (
              <OrderDetails
                handleCloseModal={handleCloseModal}
                setIsAddressSubmitted={setIsAddressSubmitted}
              />
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
