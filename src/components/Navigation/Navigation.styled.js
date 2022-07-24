import styled from 'styled-components';

export const NavContainer = styled.header`
  display: flex;
  position: fixed;
  padding: 10px 20px;
  background-color: darkgray;
  height: 60px;
`;
export const CartCount = styled.span`
  display: inline-flex;
  border-radius: 10px;
  padding: 3px;
  margin-right: 5px;

  font-size: 14px;
  background-color: green;
`;

export const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-right: 15px;
  padding: 10px 20px;
  color: #000;
  font-size: 18px;
  border: 2px solid white;
  border-radius: 5px;
`;
