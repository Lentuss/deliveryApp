import styled from 'styled-components';

export const ItemCard = styled.div`
  display: block;
  text-align: center;
`;

export const ImageThumb = styled.div`
  display: block;
  height: 230px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #fff;
`;

export const ItemImg = styled.img`
  display: block;
`;

export const ItemTitle = styled.h3`
  color: rgb(36, 36, 36);
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const ItemPrice = styled.span`
  display: block;
`;

export const AddButton = styled.button`
  display: block;
  margin-left: auto;
  padding: 10px;
  width: 120px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: background-color 200ms linear, color 200ms linear;

  &:hover,
  &:focus {
    background-color: rgb(121, 121, 121);
    color: white;
  }
`;
