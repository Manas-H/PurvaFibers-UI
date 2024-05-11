import React from "react";
import Navigationbar from "../Navigationbar";
import classes from "../styles/Rectangle.module.css";
import rect from "../images/ve.png";
import Product from "./AllProducts";
// import newz from "../images/newz.png";
import newz2 from "../images/newz2.jpg";
import fsh from "../images/fsh.jpg";
import Footer from "../pages/Footer";
import { useRef } from 'react'
import {
 FaArrowCircleDown,
} from "react-icons/fa";
const Vertical= () =>{
  const firstItemRef = useRef(null);
    return (
      <div className={classes.MainDIV}>
      <Navigationbar/>
     
        <div className ={classes.header}>
          <div className={classes.contents}>
          <h1 className={classes.title}>The Vertical Series</h1>
          <h4 className={classes.desc}>  Our Plush and exquisite tall Vertical planters. Vertical planters minimal space requirement makes it ideal for Small Apartments and offices. Eyecatching and simplistic designs to make them stand out.</h4>
          </div>
          <div className={classes.imgcontent}>
          <img className={classes.mainimg} src= {rect} alt ="Rectangle"></img>
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
     <Product value={3}/>
     <Footer />
     </div>
    );
}

export default Vertical;
