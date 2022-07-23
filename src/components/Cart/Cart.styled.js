import styled from 'styled-components';

export const CartContainer = styled.ul`
  display: flex;
  width: 100%;
  max-height: calc(100vh - 160px);

  align-items: flex-start;
  align-content: start;

  flex-wrap: wrap;

  overflow-y: scroll;
  overflow-x: hidden;

  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  list-style: none;
`;

export const CartListItem = styled.li`
  display: flex;

  flex-basis: calc((100% - 60px) / 2);
  height: 240px;
  padding: 20px 20px;
  margin: 15px;

  background-color: rgb(193, 193, 193);
  box-shadow: 2px 2px 10px black;
  border-radius: 5px;
`;
