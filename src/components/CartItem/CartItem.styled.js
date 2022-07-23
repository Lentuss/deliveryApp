import styled from 'styled-components';

export const CartCard = styled.div`
  display: flex;
  min-width: 100%;
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
  max-width: 320px;
`;

export const ItemTitle = styled.h3`
  color: rgb(36, 36, 36);
  margin-bottom: 35px;
`;

export const AttrContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: start;
  padding: 20px;
`;

export const ItemPrice = styled.span`
  display: block;
  margin-bottom: 20px;
`;

export const QuantityInput = styled.input`
  max-width: 150px;
`;
