import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addToCartAsync, fetchCartAsync } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import classes from "./prdinfo.module.css";
import Navigationbar from "../Navigationbar";
import Footer from "../pages/Footer";
// import RecommendedProducts from "./RecProduct";
import "react-medium-image-zoom/dist/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import AuthChecker from "../api/auth";
// import axios from "axios";

const Prd = (props) => {
  const { id } = useParams();
  //  console.log(id);
  const [ProductInfo, setProductInfo] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [defImg, setdefImg] = useState(true);
  const [Image, setImage] = useState("");
  const [count, setCount] = useState(1);
  //  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();

  async function fetchData() {
    // let arrr =[];
    const res = await fetch(`http://localhost:5000/api/product/${id}`);
    let data = await res.json();
    // let Name= data;
    //  data = data.filter(e => e.seriesid === {value});
    setProductInfo(data);
    // setProductId(data._id);
    // console.log(data._id);
    // console.log(ProductInfo);
    // console.log(ProductInfo && ProductInfo[0]._id);

    res
      .json()
      .catch((err) => setErrors(err))
      .then(hasError);
  }
  const handleClickCart = (product) => {
    dispatch(addToCartAsync(product, count))
      .then((response) => {
        // Handle success
        console.log("Product added to cart:", response);
        setCount(1);
        // Log the updated tempProduct with the correct cartQuantity
        console.log("Updated tempProduct:", response);
        dispatch(fetchCartAsync());
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding product to cart:", error);
        if (error.response && error.response.data) {
          // Handle specific error response from the server
          console.error("Server Error:", error.response.data);
        }
      });
  };

  //handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //handleDecrement event handler
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    // 👇️ refers to the image element
    setdefImg(false);
    let data1 = event.target.src;
    console.log(data1);
    setImage(data1);
  };

  const getInitialState = () => {
    const value = "dimension1";
    return value;
  };
  const getInitialState2 = () => {
    const value2 = "no";
    return value2;
  };
  const [value, setValue] = useState(getInitialState);
  const [value2, setValue2] = useState(getInitialState2);
  const handleselect = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleselect2 = (e) => {
    e.preventDefault();
    setValue2(e.target.value);
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AuthChecker>
        <div className={classes.diii}>
          <Navigationbar />
          {/* <h1>HELLO THIS PAGE IS FOR :{id}</h1> */}

          {ProductInfo.map((product, index) => (
            <div
              className="flex flex-col md:flex-row md:mt-[5%]"
              key={product.id}
            >
              <div className="w-full flex flex-col justify-center items-center mt-20 md:mt-0">
                <div className="flex w-full justify-center m-5">
                  {defImg ? (
                    <InnerImageZoom
                      src={product.images[[0]]}
                      zoomScale={1.3}
                      className={classes.Aslider}
                    >
                      <img
                        className={classes.img1}
                        src={product.images[[0]]}
                        alt="beer images"
                      ></img>
                    </InnerImageZoom>
                  ) : (
                    <InnerImageZoom
                      src={Image}
                      zoomScale={1.3}
                      className={classes.Aslider}
                    >
                      {" "}
                      <img
                        className={classes.img1}
                        src={Image}
                        alt="beer images"
                      ></img>{" "}
                    </InnerImageZoom>
                  )}
                </div>
                {/* <img className ={classes.img} src={Image} alt="beer images"></img> */}
                <div className="flex w-full justify-center">
                  <img
                    className={classes.img}
                    onClick={handleClick}
                    src={product.images[[0]]}
                    data-src={product.images[[0]]}
                    alt="beer images"
                  ></img>
                  <img
                    className={classes.img}
                    onClick={handleClick}
                    src={product.images[[1]]}
                    data-src={product.images[[1]]}
                    alt="beer images"
                  ></img>
                  <img
                    className={classes.img}
                    onClick={handleClick}
                    src={product.images[[2]]}
                    data-src={product.images[[2]]}
                    alt="beer images"
                  ></img>
                  <img
                    className={classes.img}
                    onClick={handleClick}
                    src={product.images[[3]]}
                    data-src={product.images[[3]]}
                    alt="beer images"
                  ></img>
                  <img
                    className={classes.img}
                    onClick={handleClick}
                    src={product.images[[4]]}
                    data-src={product.images[[4]]}
                    alt="beer images"
                  ></img>
                </div>
              </div>

              <div className={classes.detail}>
                {/* <span className ={classes.span}>{product.Dimensions[1][2]}</span>
          <p className={classes.des}>{product.description}</p> */}
                <h1 className={classes.title}>{product.name}</h1>
                <div className={classes.val}>
                  <h2 className={classes.headermrp}>
                    -
                    {Math.round(
                      ((product.mrp - product.esp) / product.mrp) * 100
                    )}
                    %
                  </h2>
                  <h3 className={classes.esp}>₹{product.esp}*</h3>
                </div>
                <div className={classes.val2}>
                  <h4 className={classes.tag}>M.R.P:</h4>
                  <h4 className={classes.price}>₹{product.mrp}</h4>
                </div>
                <div className={classes.dimen}>
                  <h2 className={classes.dimens}>Dimensions</h2>
                  <select
                    value={value}
                    onChange={handleselect}
                    className={classes.selector}
                  >
                    <option value="dimension1">
                      {" "}
                      {product.Dimensions[0][0]} x {product.Dimensions[0][1]} x{" "}
                      {product.Dimensions[0][2]} in
                    </option>
                    <option value="dimension2">
                      {" "}
                      {product.Dimensions[1][0]} x {product.Dimensions[1][1]} x{" "}
                      {product.Dimensions[1][2]} in
                    </option>
                    <option value="dimension3">
                      {" "}
                      {product.Dimensions[2][0]} x {product.Dimensions[2][1]} x{" "}
                      {product.Dimensions[2][2]} in
                    </option>
                  </select>
                </div>
                <div className={classes.drainage}>
                  <h2 className={classes.dimens}>Drainage Holes</h2>
                  <select
                    value={value2}
                    onChange={handleselect2}
                    className={classes.selector2}
                  >
                    <option value="no">{product.drain[0]}</option>
                    <option value="yes">{product.drain[1]} </option>
                  </select>
                </div>
                <div className={classes.quantity}>
                  <button onClick={handleDecrement} className={classes.bt}>
                    -
                  </button>
                  <h2 className={classes.ct}>{count}</h2>
                  <button onClick={handleIncrement} className={classes.bt}>
                    +
                  </button>
                  {/* <button onClick={() => setCount(1)} className={classes.bt}>Reset</button> */}
                  <button
                    className={classes.btn}
                    onClick={() => handleClickCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* {ProductInfo && ProductInfo.length > 0 && (
        <RecommendedProducts productId={ProductInfo[0]._id} value={1} />
      )} */}

          <Footer />
        </div>
      </AuthChecker>
    </>
  );
};

export default Prd;
