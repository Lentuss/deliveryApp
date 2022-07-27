import PropTypes from 'prop-types';

import {
  CartCard,
  ItemImg,
  ItemTitle,
  AttrContainer,
  ItemPrice,
  QuantityInput,
} from './CartItem.styled';

const CartItem = ({ id, name, price, url, quantity, addQuantity }) => {
  return (
    <CartCard>
      <ItemImg src={url} alt={name} width="280" />
      <AttrContainer>
        <ItemTitle>{name}</ItemTitle>
        <ItemPrice>
          Item price: <br /> {price} credits
        </ItemPrice>
        <label>
          Quantity
          <QuantityInput
            type="number"
            value={quantity}
            step="1"
            onChange={e => {
              addQuantity(id, e.currentTarget.value);
            }}
          />
        </label>
      </AttrContainer>
    </CartCard>
  );
};

CartItem.propTypes = {
  addQuantity: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
