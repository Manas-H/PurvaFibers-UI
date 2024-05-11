import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import classes from "./product.module.css";
// import AuthChecker from "../api/auth";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [hasError, setErrors] = useState(false);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const loadMoreProducts = () => {
    const nextProducts = products.slice(
      visibleProducts.length,
      visibleProducts.length + 6
    );
    setVisibleProducts([...visibleProducts, ...nextProducts]);
    if (visibleProducts.length + 6 >= products.length) {
      setShowLoadMore(false);
    }
  };

  async function fetchData() {
    try {
      const res = await fetch("http://localhost:5000/api/Product/");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setProducts(data);
      setVisibleProducts(data.slice(0, 6));
      setShowLoadMore(data.length > 6);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setErrors(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
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

  // if (hasError) {
  //   return <p>Error fetching data. Please try again later.</p>;
  // }

  return (
    // <AuthChecker>
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 w-full h-fit">
        {visibleProducts.map((product, index) => (
          <Card key={product.id} className={classes.Cardd}>
            <Link
              to={`${product.productid}`}
              style={{ textDecoration: "none" }}
            >
              <button className={classes.but}>
                <img
                  className={classes.img}
                  src={product.images[0]}
                  alt="beer images"
                />
                <div className={classes.diver}>
                  <h1 className={classes.title}>{product.name}</h1>
                </div>
              </button>
            </Link>
          </Card>
        ))}
      </div>
      <div className="flex my-5">
        {showLoadMore && (
          <button
            onClick={loadMoreProducts}
            className="bg-[#8ab5ac] text-white p-2 mt-4 mx-auto rounded"
          >
            Load More
          </button>
        )}
      </div>
    </>
    // </AuthChecker>
  );
};

export default Products;
