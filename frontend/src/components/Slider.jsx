import { useState } from "react";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { data } from "../Data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f7e2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100 + "vw"});
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  height: 80vh;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
    let len = 0;
    if (direction === "right")
      len = slideIndex + 1 < data.length ? slideIndex + 1 : 0;
    else if (direction === "left")
      len = slideIndex - 1 < 0 ? data.length - 1 : slideIndex - 1;
    setslideIndex(len);
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      {data.map((item, index, arr) => (
        <Wrapper key={index} slideIndex={slideIndex}>
          <Slide>
            <ImgContainer>
              <Image alt="slider" src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
      ))}
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
