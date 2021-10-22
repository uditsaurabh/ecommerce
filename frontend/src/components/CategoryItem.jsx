import styled from "styled-components";

const SubHeader = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
`;
const Container = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${SubHeader} {
    display: none;
  }
  &:hover ${SubHeader} {
    display: flex;
    position: absolute;
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  overflow: hidden;
`;
const Button = styled.button`
  padding: 10px;
  border: 0;
  font-size: large;
  color: gray;
`;

const Title = styled.h2`
  color: white;
  font-weight: 800;
  font-size: x-large;
`;
export const CategoryItem = ({ img, title }) => {
  return (
    <Container>
      <Image src={img} />
      <SubHeader>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </SubHeader>
    </Container>
  );
};
