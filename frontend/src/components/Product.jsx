import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Icons = styled.div`
  top: 15%;
`;
const Container = styled.div`
  height: 50vh;
  width: 100px;

  position: relative;
  ${Icons} {
    display: none;
  }
  &:hover ${Icons} {
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

const Product = ({ img }) => {
  return (
    <Container>
      <Image src={img} />
      <Icons>
        <ShoppingCartOutlinedIcon />
        <SearchOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
      </Icons>
    </Container>
  );
};

export default Product;
