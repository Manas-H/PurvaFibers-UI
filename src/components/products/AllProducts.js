import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import classes from "./product.module.css";

function Product(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setErrors] = useState(false);
  const [Name, setName] = useState([]);

  async function fetchData() {
    // let arrr =[];
    const res = await fetch("http://localhost:5000/api/Product/");
    let data = await res.json();
    // console.log("Allproductrs", data);
    // let Name= data;
    //  data = data.filter(e => e.seriesid === {value});
    setName(data);
    // console.log(Name);
    res
      .json()
      .catch((err) => setErrors(err))
      .then(hasError);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData().then(() => setIsLoading(false));

    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 w-full h-fit my-5">
        {/* Placeholder cards */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="animate-pulse h-32 bg-gray-300 mb-4"></div>
            <div className="animate-pulse h-4 w-2/3 bg-gray-300 mb-2"></div>
            <div className="animate-pulse h-4 w-1/3 bg-gray-300"></div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 w-full h-fit">
      {Name.filter((e) => e.seriesid === props.value).map((product, index) => (
        <Card key={product.id} className={classes.Cardd}>
          <Link to={`${product.productid}`} style={{ textDecoration: "none" }}>
            <button className={classes.but}>
              <img
                className={classes.img}
                src={product.images[[0]]}
                alt="beer images"
              ></img>
              <div className={classes.diver}>
                <h1 className={classes.title}>{product.name}</h1>
              </div>
            </button>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default Product;
