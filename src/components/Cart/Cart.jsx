import PropTypes from 'prop-types';
import CartItem from 'components/CartItem';
import { CartContainer, CartListItem } from './Cart.styled';

const Cart = ({ items, addQuantity }) => {
  return (
    <CartContainer>
      {items.map(item => (
        <CartListItem key={item.id}>
          <CartItem
            id={item.id}
            name={item.name}
            price={item.price}
            url={item.url}
            quantity={item.quantity}
            addQuantity={addQuantity}
          />
        </CartListItem>
      ))}
    </CartContainer>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};

export default Cart;
