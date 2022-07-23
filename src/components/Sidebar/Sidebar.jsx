import { SideBarContainer } from './Sidebar.styled';

const SideBar = ({ children }) => {
  return (
    <SideBarContainer>
      <h2>Shops:</h2>
      {children}
    </SideBarContainer>
  );
};

export default SideBar;
