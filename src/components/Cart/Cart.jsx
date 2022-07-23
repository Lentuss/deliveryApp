import React, { Component } from 'react';
import CartItem from 'components/CartItem';
import { CartContainer, CartListItem } from './Cart.styled';

class Cart extends Component {
  //   state = { quantity: 1 };
  render() {
    const { items, addQuantity } = this.props;
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
  }
}
export default Cart;
