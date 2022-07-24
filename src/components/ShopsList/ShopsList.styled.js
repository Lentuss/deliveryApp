import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
`;

export const ShopListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Shop = styled.button`
  display: block;
  min-width: 20vw;
  border-radius: 5px;
  box-shadow: 2px 2px 10px black;
  background-color: #fff;

  padding: 30px 20px;

  font-size: 20px;
  transition: background-color 200ms linear, color 200ms linear;

  &:hover,
  &:focus {
    background-color: rgb(121, 121, 121);
    color: #fff;
  }
`;
