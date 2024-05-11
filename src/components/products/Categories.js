import styled from "styled-components";
// import { categories } from "./ProductContents";
import Products from "./Products";
// import { useState } from 'react'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = ({ products }) => {
  // const [products] = useState([]);
  return (
    <Container>
      {
        products ?
      products.map((product) => (
        <Products product={product}/>
      ))
      :
      "Loading"
      }
    </Container>
  )};


export default Categories;