import React from "react";
import styled from "styled-components";
import { categories } from "../Data";
import { CategoryItem } from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} img={item.img} title={item.title} />
      ))}
    </Container>
  );
};

export default Categories;
