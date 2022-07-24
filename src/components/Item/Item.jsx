import React from 'react';

import {
  ItemCard,
  ImageThumb,
  ItemImg,
  ItemTitle,
  ButtonContainer,
  ItemPrice,
  AddButton,
} from './Item.styled';

const Item = ({ id, name, price, url, addToCart }) => {
  return (
    <ItemCard>
      <ImageThumb>
        <ItemImg src={url} alt={name} width="400px" />
      </ImageThumb>

      <ItemTitle>{name}</ItemTitle>
      <ButtonContainer>
        <ItemPrice>{price} credits</ItemPrice>
        <AddButton
          type="button"
          onClick={() => {
            addToCart(id, name, price, url);
          }}
        >
          Add to cart
        </AddButton>
      </ButtonContainer>
    </ItemCard>
  );
};

Item.defaultProps = {
  url: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
};
export default Item;
