import React from "react";
import "../styles/home.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navigationbar from "../Navigationbar";
import Autop from "./Autoplay";
import Choose from "./chooseus";
import Products from "../products/Products";
import Preminum from "./premium";
import Footer from "./Footer";
import ProdSeries from "./ProdSeries";
import classes from "../styles/Rectangle.module.css";

const Home = () => {
  return (
    <div className="home-page-full">
      <ToastContainer />
      <Navigationbar />
      <div className="main-body">
        <Autop />
      </div>
      <Choose />
      <Preminum />
      <ProdSeries />
      {/* <Products /> */}
      <div className="products">
      <h1 className={classes.prdtitle}>PRODUCTS</h1>
        <hr className={classes.line}></hr>
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
