import React from "react";
import Navigationbar from "../Navigationbar";
import classes from "../styles/Rectangle.module.css";
import rou from "../images/bowl.png";
import Product from "./AllProducts";
// import newz from "../images/newz.png";
import newz2 from "../images/newz2.jpg";
import fsh from "../images/fsh.jpg";
import Footer from "../pages/Footer";
import { useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
const Bowl = () => {
  const firstItemRef = useRef(null);
  return (
    // <div>
    //   <Navigationbar />

    //   <div className={classes.header}>
    //   <div className={classes.contents}>
    //       <h1 className={classes.title}>The Bowl Series</h1>
    //       <h4 className={classes.desc}>
    //         {" "}
    //         Our Premium rectangular planters ideal for your Home, Garden and
    //         Lawn decorations. Elegant and modern designs, they are ideal for
    //         both indoor and outdoor use, fitting well with contemporary
    //         architecture styles.
    //       </h4>
    //     </div>
    //     <div className={classes.Imagediv}>
    //       <img className={classes.mainimage2} src={rou} alt="Rectangle"></img>
    //       <h3 className={classes.br1}> BROWSE PRODUCTS</h3>
    //       <button
    //         className={classes.btnfa1}
    //         onClick={() => firstItemRef.current.scrollIntoView()}
    //       >
    //         <FaArrowCircleDown style={{ fontSize: 80, fontWeight: 200 }} />
    //       </button>
    //       {/* <img className={classes.mainimg3} src ={newz} alt ="rectangular fiberglass"></img> */}
    //     </div>
    //     {/* <img className={classes.mainimg} src={(Name.Image1)} alt = "nothing"></img> */}
    //   </div>
    //   <div className={classes.ent}>
    //     <h4 className={classes.desc}>
    //       {" "}
    //       Our Premium Small Bowl planters ideal for your Home and indoor arenas
    //     </h4>
    //     {/* <h6 className={classes.des}>Sturdy and widespread horizontal planters precisely made to give you more area for your plants </h6> */}
    //     <img
    //       className={classes.mainimg3}
    //       src={newz2}
    //       alt="rectangular fiberglass"
    //     ></img>
    //     <img
    //       className={classes.mainimg2}
    //       src={fsh}
    //       alt="rectangular fiberglass"
    //     ></img>
    //   </div>

    //   <div ref={firstItemRef}></div>
    //   <Footer />
    // </div>
    <div className={classes.MainDIV}>
      <Navigationbar />

      <div className={classes.header}>
        <div className={classes.contents}>
          <h1 className={classes.title}>The Bowl Series</h1>
          <h4 className={classes.desc}>
            {" "}
            Our Premium rectangular planters ideal for your Home, Garden and
            Lawn decorations. Elegant and modern designs, they are ideal for
            both indoor and outdoor use, fitting well with contemporary
            architecture styles.
          </h4>
        </div>
        <div className={classes.imgcontent}>
          <img className={classes.mainimg} src={rou} alt="Rectangle"></img>
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
        <Product value={4} />
      </div>

      <Footer className="mt-auto" />
    </div>
  );
};

export default Bowl;
