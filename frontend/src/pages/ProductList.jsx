import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 15px;
  margin-left: 10px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Product Search Filter:</FilterText>
          <Select>
            <Option disabled selected>
              color
            </Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Black</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <Option disabled selected>
              size
            </Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
            <Option>xxl</Option>
            <Option>xxxl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Product Sort Filter:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
