import React from "react";
import Navigationbar from "../Navigationbar";
import Products from "../products/Products";
import Footer from "./Footer";
import classes from "../styles/Rectangle.module.css";

const ProductAll = () => {
  return (
    <div>
      <Navigationbar />
      <div className="products mt-20">
        <h1 className={classes.prdtitle}>PRODUCTS</h1>
        <hr className={classes.line}></hr>
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default ProductAll;
