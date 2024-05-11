import React from "react";
import { AiFillCustomerService, AiOutlineHome } from "react-icons/ai";
import { BiCustomize } from "react-icons/bi";
//import images from '../images/bg.png';
import "../styles/chooseus.css";
//import images from '../images/ad.jpeg';
//import comb from '../images/comb.png';

const Choose = () => {
  return (
    <>
      <div className="c-container">
        <div className="c-content flex flex-col justify-center items-center">
          <div>
          <h3>Why Choose Us?</h3>
          </div>
          <span></span>
          <div className="c-box flex flex-col md:flex-row">
            <div className="c-box-c">
                <BiCustomize className="c-icons"/>
                <p>Customize</p>
            </div>
            <div className="c-box-c">
                <AiOutlineHome className="c-icons"/>
                <p>Home Delivery</p>
            </div>
            <div className="c-box-c">
                <AiFillCustomerService className="c-icons"/>
                <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;

//  <div className={classes.chdiv}>
//  <div className={classes.container}>
//  <div className={classes.bannerdiv}>
//  </div>
//  </div>
//  </div>

//      <div className={classes.div2}>
//  <div className={classes.headdiv}>
//      <img className={classes.imgc}src={images} alt="Why choose us"></img>
//  <h1 className={classes.head1}>WHY <br/>CHOOSE <br/>US?</h1>
//  </div>
//  <h1 className={classes.head1}>WHY CHOOSE US!!</h1>
//  </div>
