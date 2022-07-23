import styled from 'styled-components';

export const CartContainer = styled.ul`
  display: grid;
  max-width: calc(100vw - 60px);
  max-height: calc(100vh - 20px);
  grid-template-columns: repeat(2, fit-content(100%));
  grid-template-rows: 270px repeat(auto-fill, fit-content(100%)) 300px;
  grid-gap: 36px;
  overflow-y: scroll;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  list-style: none;
`;

export const CartListItem = styled.li`
  border-radius: 2px;
  padding: 20px 20px;

  background-color: rgb(193, 193, 193);
  box-shadow: 2px 2px 10px black;
  border-radius: 5px;
  flex-shrink: 1;
`;
