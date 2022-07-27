import PropTypes from 'prop-types';

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
Item.propTypes = {
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default Item;
