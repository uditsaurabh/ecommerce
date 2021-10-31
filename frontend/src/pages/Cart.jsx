import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40vw;
`;
const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

const TopButton = styled.button`
  border: 1px solid lightgrey;
  padding: 10px;
  background: white;
  cursor: pointer;
  font-weight: 600;
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

const Bottom = styled.div``;

const Cart = () => {
  return (
    <div>
      <Navbar />
      <Announcements />
      <Container>
        <Wrapper>
          <Title>Your Bag</Title>
          <Top>
            <TopButton>Checkout</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Wishlist(0)</TopText>
            </TopTexts>
            <TopButton filled>Continue Shopping</TopButton>
          </Top>
          <Bottom></Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
