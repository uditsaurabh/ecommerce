import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
`;

const Announcements = () => {
  return <Container>Super Deal ! Free shipping order above 100Rs.</Container>;
};

export default Announcements;
