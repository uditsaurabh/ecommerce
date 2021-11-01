import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
    ${mobile({ width: "100vw", height: "100%" })}
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
  `;
  /* Adding components to the left side */
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ justifyContent: "space-evenly" })}
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;
  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: ${(props) => (props.mobileView ? "none" : "flex")};
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({
      display: (props) => (props.mobileView ? "flex" : "none"),
      width: "90vw",
      justifyContent: "space-between",
      marginLeft: "10px",
    })}
  `;
  const Input = styled.input`
    border: none;
  `;

  /* Center side */
  const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({
      display: "flex",
      justifyContent: "space-evenly",
    })}
  `;
  const Logo = styled.h1`
    font-weight: bold;
  `;

  /* Right Side */
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "space-evenly" })}
  `;
  const MenuItem = styled.div`
    margin-right: 10px;
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "grey", fonSize: 16 }}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>UDIT's.</Logo>
        </Center>
        <Right>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary"></Badge>
            <ShoppingCartOutlinedIcon />
          </MenuItem>
        </Right>
      </Wrapper>

      <SearchContainer mobileView>
        <Input />
        <SearchIcon style={{ color: "grey", fonSize: 16 }}></SearchIcon>
      </SearchContainer>
    </Container>
  );
};

export default Navbar;
