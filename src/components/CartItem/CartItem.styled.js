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
  margin-right: 20px;
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
`;

export const ItemPrice = styled.span`
  display: block;
  margin-bottom: 30px;
`;

export const QuantityInput = styled.input`
  width: 100%;
  padding: 10px;
`;
