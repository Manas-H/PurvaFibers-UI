import React from "react";
import img from "../images/premium-q.png";
import "../styles/chooseus.css";

const premium = () => {
  return (
    <>
      <div className="p-container">
        <div className="p-wrapper flex justify-center">
          <div className="p-flex-box text-white flex flex-col justify-center items-center">
            <div className="p-title m-3">
              <h2>Premium products</h2>
            </div>
            <div className="p-text mx-10 md:mx-40">
              <p className="text-justify md:text-center">
                If you are looking for premium products of the highest quality,
                dedicated to really demanding food products, choose premium
                products from the Custom Fiber product line. If you want to know
                the offer of premium products, please contact the sales
                department. We will answer all your questions.
              </p>

              <p className="flex justify-center mt-2">
                <img alt="Premium Quality" src={img} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default premium;
