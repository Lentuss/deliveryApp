import styled from 'styled-components';

export const CartContainer = styled.ul`
  display: flex;
  margin: -18px;
  min-width: calc(75vw-36px);

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
  flex-basis: calc((100%-36px) / 2);
  margin: 18px;

  background-color: rgb(193, 193, 193);
  box-shadow: 2px 2px 10px black;
  border-radius: 5px;
  /* flex-shrink: 1; */
`;
