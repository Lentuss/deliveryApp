import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  max-width: calc(100vw - 60px);
  max-height: calc(100vh - 100px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 36px;
  overflow-y: scroll;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  list-style: none;
`;

export const ListItem = styled.li`
  border-radius: 2px;
  padding: 10px 20px;

  background-color: rgb(193, 193, 193);
  box-shadow: 2px 2px 10px black;
  border-radius: 5px;
  flex-shrink: 0;
`;
