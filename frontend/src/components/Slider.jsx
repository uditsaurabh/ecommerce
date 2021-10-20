import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

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
`;

const Wrapper = styled.div`
  height: 100%;
 tra
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
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image
              alt="slider"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFif9g4tebrQaQvM658dnaBRT8jkgSKiqZag&usqp=CAU"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image
              alt="slider"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFif9g4tebrQaQvM658dnaBRT8jkgSKiqZag&usqp=CAU"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image
              alt="slider"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFif9g4tebrQaQvM658dnaBRT8jkgSKiqZag&usqp=CAU"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>RAINY SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image
              alt="slider"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFif9g4tebrQaQvM658dnaBRT8jkgSKiqZag&usqp=CAU"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>SPRING SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
