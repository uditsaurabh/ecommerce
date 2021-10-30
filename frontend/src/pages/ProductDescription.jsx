import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
const ImgContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 0.5rem;
  flex: 1;
`;
const Image = styled.img`
  height: 90vh;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 2.5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
`;
const Desc = styled.div`
  letter-spacing: 0.02em;
  word-spacing: 0.1em;
  margin-top: 20px;
`;
const Price = styled.div`
  margin-top: 1rem;
  font-weight: 200;
  font-size: 30px;
`;
const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 1.5rem;
  font-weight: 400;
  border: 1px solid teal;
  background-color: white;
  margin-right: 20px;
  margin-top: 25px;
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
  :hover {
    background-color: rgba(136, 128, 128, 0.055);
  }
`;

const FilterTitle = styled.h2``;

const FilterCover = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 20%;
  border: ${(props) =>
    props.selected === props.data ? "1px solid teal" : "1px solid lightgrey"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: rgba(136, 128, 128, 0.055);
  }
`;
const Filter = styled.div`
  height: 80%;
  width: 80%;
  background-color: ${(props) => props.color};
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;
const AmountContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Quantity = styled.p`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  padding: 0;
`;

const Amount = styled.div`
  border: 1px solid teal;
  border-radius: 25%;
  width: 30px;
  text-align: center;
`;

const ProductDescription = () => {
  const [selectColor, setSelectColor] = useState("red");
  const [seletSize, setSeletSize] = useState("sm");
  const [qty, setQty] = useState(1);

  return (
    <div>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Leather Coat</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            maiores, facilis eum commodi sapiente voluptates in nulla eos quam!
            Qui eaque iusto architecto optio. Necessitatibus perferendis
            suscipit dignissimos eum, asperiores quas nihil animi soluta porro
            tempora omnis? Illo minus fugiat provident quasi, earum excepturi
            laudantium. Autem expedita deleniti magni maiores eligendi. Iure, at
            debitis dicta nesciunt accusamus sunt, minus totam vel voluptatibus
            sequi error libero qui itaque repudiandae, perferendis rem ipsam
            sapiente voluptatem minima quod? Vel perferendis, alias recusandae
            ullam saepe iste quis odio ad accusantium quam dolore numquam atque
            hic rem optio earum. Cupiditate praesentium aut corporis maxime
            voluptatum.
          </Desc>
          <Price>Price: $ 200</Price>
          <FilterContainer>
            <FilterTitle>Colors</FilterTitle>
            <FilterCover
              selected={selectColor}
              data="red"
              onClick={(e) => {
                setSelectColor("red");
              }}
            >
              <Filter color="red" />
            </FilterCover>
            <FilterCover
              selected={selectColor}
              data="green"
              onClick={(e) => {
                setSelectColor("green");
              }}
            >
              <Filter color="green" />
            </FilterCover>
            <FilterCover
              selected={selectColor}
              data="blue"
              onClick={(e) => {
                setSelectColor("blue");
              }}
            >
              <Filter color="blue" />
            </FilterCover>
          </FilterContainer>
          <FilterContainer>
            <FilterTitle>Size</FilterTitle>
            <FilterCover
              selected={seletSize}
              data="sm"
              onClick={(e) => {
                setSeletSize("sm");
              }}
            >
              <Filter>sm</Filter>
            </FilterCover>
            <FilterCover
              selected={seletSize}
              data="md"
              onClick={(e) => {
                setSeletSize("md");
              }}
            >
              <Filter>md</Filter>
            </FilterCover>
            <FilterCover
              selected={seletSize}
              data="lg"
              onClick={(e) => {
                setSeletSize("lg");
              }}
            >
              <Filter>lg</Filter>
            </FilterCover>
            <FilterCover
              selected={seletSize}
              data="xl"
              onClick={(e) => {
                setSeletSize("xl");
              }}
            >
              <Filter>xl</Filter>
            </FilterCover>
            <FilterCover
              selected={seletSize}
              data="xxl"
              onClick={(e) => {
                setSeletSize("xxl");
              }}
            >
              <Filter>xxl</Filter>
            </FilterCover>
            <FilterCover
              selected={seletSize}
              data="xxxl"
              onClick={(e) => {
                setSeletSize("xxxl");
              }}
            >
              <Filter>xxxl</Filter>
            </FilterCover>
          </FilterContainer>
          <AmountContainer>
            <FilterTitle>Amount</FilterTitle>
            <Quantity>
              <AddIcon
                onClick={(e) => {
                  setQty((q) => q + 1);
                }}
              />
              <Amount>{qty}</Amount>
              <RemoveIcon
                onClick={(e) => {
                  setQty((q) => {
                    if (q > 2) return q - 1;
                    else return 1;
                  });
                }}
              />
            </Quantity>
          </AmountContainer>
          <BtnContainer>
            <Button>Buy Now</Button>
            <Button>Add To Cart</Button>
          </BtnContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDescription;
