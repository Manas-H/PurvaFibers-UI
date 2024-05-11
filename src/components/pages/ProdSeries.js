import React from "react";
import { Link } from "react-router-dom";

const ProdSeries = () => {
  return (
    <div className="series-sec">
      <div className="heading-series flex justify-center">
        <h2>Product Series</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="series-c-1 flex flex-col md:flex-row justify-center items-center">
          <Link to="/Rectangle" className="button">
            Rectangle Series
          </Link>
          <Link to="/Round" className="button">
            Round Series
          </Link>
          <Link to="/Vertical" className="button">
            Vertical Series
          </Link>
        </div>
        <div className="series-c-1 flex flex-col md:flex-row">
          <Link to="/Bowl" className="button">
            Bowl Series
          </Link>
          <Link to="/allProduct" className="button">
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProdSeries;
