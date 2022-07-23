import styled from 'styled-components';
const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  display: flex;
  padding: 60px 20px 10px;
  overflow: hidden;
  overflow-y: hidden;
  max-height: calc(100vh - 20px);
`;
export default MainContainer;
