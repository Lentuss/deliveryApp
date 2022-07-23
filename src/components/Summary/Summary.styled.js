import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: flex;
  max-height: 60px;
  align-items: center;
  justify-content: end;
  padding: 20px;
`;

export const Summ = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const SbmtButton = styled.button`
  display: block;
  width: 180px;
  margin-left: 50px;
  padding: 10px;
  background-color: darkgray;
  border-color: transparent;
  border-radius: 10px;
  box-shadow: -2px -2px 8px black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: gray;
  }
  &:active {
    box-shadow: 2px 2px 5px gray;
  }
`;
