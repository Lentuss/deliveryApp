import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  display: flex;
  padding: 60px 20px 10px;
  overflow: hidden;
  max-height: calc(100vh - 20px);
`;
MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainContainer;
