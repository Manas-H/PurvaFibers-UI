import React from "react";
import Navigationbar from "../Navigationbar";
import classes from "../styles/Rectangle.module.css";
import rou from "../images/curv2.png";
// import newz from "../images/newz.png";
import newz2 from "../images/roup1.jpg";
import fsh from "../images/roup2.jpg";
import {useRef} from 'react';
import Footer from "../pages/Footer";
import Product from "./AllProducts";
import {
 FaArrowCircleDown,
} from "react-icons/fa";
const Round= () =>{
    const firstItemRef = useRef(null);
    return (
      <div className={classes.MainDIV}>
      <Navigationbar/>
     
        <div className ={classes.header}>
          <div className={classes.contents}>
          <h1 className={classes.title}>The Round Series</h1>
          <h4 className={classes.desc}> Round Planters will grace any space with its timeless class and ample elegance. Our round planters are favored by gardeners, home decorators, designers and landscapers for years.</h4>
          </div>
          <div className={classes.imgcontent}>
          <img className={classes.mainimg} src= {rou} alt ="Rectangle"></img>
          </div>
          </div>
         <div className={classes.twodiv}>
          <div className={classes.disdiv}>
           <img className={classes.mainimg3} src ={newz2} alt ="rectangular fiberglass"></img>
          <img className={classes.mainimg3} src ={fsh} alt ="rectangular fiberglass"></img>
          </div>
          <div className={classes.browse}>
          <h3 className={classes.br}> BROWSE PRODUCTS</h3>
          <button className={classes.btnfa} onClick={() => firstItemRef.current.scrollIntoView()}><FaArrowCircleDown style={{fontSize: 80, fontWeight: 200,}} /></button> 
          </div>
          </div>
           
         
  
     <div ref={firstItemRef} className={classes.prd}></div>
     
     <h1 className={classes.prdtitle} >PRODUCTS</h1>
     <hr className={classes.line}></hr>
     <Product value={2}/>
     <Footer />
     </div>
    );
}

export default Round;
