import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useRef } from 'react'

const RecommendedProducts = ({ productId }) => {
  const [recommended, setRecommended] = useState([]);
  const firstItemRef = useRef(null);

  useEffect(() => {
    axios.get(`/api/recommendations/${productId}`)
      .then(response => {
        setRecommended(response.data.recommendations)
        console.log("A:",response.data.recommendations); // add this line
      })
      .catch(error => console.log(error));
  }, [productId]);

  console.log("recommeded", recommended)
  
  return (
    <div  ref={firstItemRef} className={classes.body}>
       <h1 className={classes.prdtitle} >RECCOMMENDED PRODUCTS</h1> 
       <hr className={classes.line}></hr>
      <ul className={classes.bbox}>
        {Array.isArray(recommended.recommendations) && recommended.recommendations.map(recommendation => {
          return (
            <Card key={recommendation._id} className={classes.Cardd}>  
            <Link to={`${recommendation.productid}`} style={{textDecoration : 0}}>
            <button key={recommendation._id} className={classes.but}>
       <img className ={classes.img} src={(recommendation.images[[0]]) } alt="beer images"></img>
       <div className={classes.diver}>
   <h1 className={classes.title} >{recommendation.name}</h1>
   </div>
   </button>
            </Link>
            </Card>
          )
        })}
      </ul>
    </div>
  );
};

export default RecommendedProducts;

