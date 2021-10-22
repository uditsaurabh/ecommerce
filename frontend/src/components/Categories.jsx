import React from "react";
import styled from "styled-components";
import { categories } from "../Data";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: flex;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id}img={item.img} title={item.title} />
      ))}
    </Container>
  );
};

export default Categories;
