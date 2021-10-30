import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  height: 40vh;
  background-color: #faf8f8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: bolder;
`;

const Desc = styled.div``;

const InputContainer = styled.div`
  width: 40vw;
  height: 7vh;
  border: 1px solid lightgrey;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2px;
`;
const Input = styled.input`
  border: 0;
  flex: 8;
  padding: 5px;
`;
const Button = styled.button`
  border: 0;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timely Update from your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
