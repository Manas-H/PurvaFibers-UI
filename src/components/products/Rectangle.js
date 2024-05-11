import React from "react";
import Navigationbar from "../Navigationbar";
import classes from "../styles/Rectangle.module.css";
import rect from "../images/Sandal.png";
//import newz from "../images/newz.png";
import newz2 from "../images/rectp1.jpg";
import fsh from "../images/rectp2.jpg";
import { useRef } from "react";
import Product from "./AllProducts";
import Footer from "../pages/Footer";
import { FaArrowCircleDown } from "react-icons/fa";

const Rectangle = (props) => {
  const firstItemRef = useRef(null);
  return (
    <div className={classes.MainDIV}>
      <Navigationbar />

      <div className={classes.header}>
        <div className={classes.contents}>
          <h1 className={classes.title}>The Rectangular Series</h1>
          <h4 className={classes.desc}>
            {" "}
            Our Premium rectangular planters ideal for your Home, Garden and
            Lawn decorations. Elegant and modern designs, they are ideal for
            both indoor and outdoor use, fitting well with contemporary
            architecture styles.
          </h4>
        </div>
        <div className={classes.imgcontent}>
          <img className={classes.mainimg} src={rect} alt="Rectangle"></img>
        </div>
      </div>
      <div className={classes.twodiv}>
        <div className={classes.disdiv}>
          <img
            className={classes.mainimg3}
            src={newz2}
            alt="rectangular fiberglass"
          ></img>
          <img
            className={classes.mainimg3}
            src={fsh}
            alt="rectangular fiberglass"
          ></img>
        </div>
        <div className={classes.browse}>
          <h3 className={classes.br}> BROWSE PRODUCTS</h3>
          <button
            className={classes.btnfa}
            onClick={() => firstItemRef.current.scrollIntoView()}
          >
            <FaArrowCircleDown style={{ fontSize: 80, fontWeight: 200 }} />
          </button>
        </div>
      </div>

      <div ref={firstItemRef} className={classes.prd}></div>
      <div className="h-fit">
        <h1 className={classes.prdtitle}>PRODUCTS</h1>
        <hr className={classes.line}></hr>
        <Product value={1} />
      </div>

      <Footer className="mt-auto" />
    </div>
  );
};

export default Rectangle;
