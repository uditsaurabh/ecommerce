import React from "react";
import { popularProducts } from "../Data";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column", flexWrap: "nowrap" })}
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map(({ id, img }) => (
        <Product key={id} img={img} />
      ))}
    </Container>
  );
};

export default Products;
