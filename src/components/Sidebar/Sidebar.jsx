import PropTypes from 'prop-types';
import { SideBarContainer } from './Sidebar.styled';

const SideBar = ({ children }) => {
  return (
    <SideBarContainer>
      <h2>Shops:</h2>
      {children}
    </SideBarContainer>
  );
};

SideBar.propTypes = {
  children: PropTypes.element,
};
export default SideBar;
