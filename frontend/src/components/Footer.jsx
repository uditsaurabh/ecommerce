import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #e7cbcb14;
  display: flex;
  justify-content: space-between;
  text-align: center;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  ${mobile({ border: "1px solid #ecd5d533" })}
`;
const Logo = styled.h1``;
const Desc = styled.p``;
const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
`;
const Center = styled.div`
  flex: 1;
  ${mobile({ border: "1px solid #ecd5d533" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: bolder;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
`;
const Right = styled.div`
  flex: 1;
  ${mobile({ alignItems: "center", border: "1px solid #ecd5d533" })}
`;
const ContactItem = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>UDIT's.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          maxime beatae ut similique eligendi animi repellat corrupti labore
          omnis est, nisi obcaecati totam id laudantium. Ad aliquam incidunt
          impedit praesentium.
        </Desc>
        <SocialIconContainer>
          <SocialIcon color="blue">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="lightblue">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="pink">
            <InstagramIcon />
          </SocialIcon>
        </SocialIconContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>WomanFashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          672, Avanue Street,New york,10091
        </ContactItem>
        <ContactItem>
          <PhoneInTalkIcon style={{ marginRight: "10px" }} />
          +1 988076452
        </ContactItem>
        <ContactItem>
          <MarkEmailUnreadIcon style={{ marginRight: "10px" }} />
          sgpr@itc.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
