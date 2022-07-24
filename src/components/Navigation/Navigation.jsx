import React from 'react';
import { NavContainer, CartCount, NavButton } from './Navigation.styled';

const Navigation = ({ onClick, cart }) => {
  return (
    <NavContainer>
      <NavButton
        type="button"
        name="shop"
        onClick={e => onClick(e.currentTarget.name)}
      >
        Shop
      </NavButton>
      <NavButton
        type="button"
        name="cart"
        onClick={e => onClick(e.currentTarget.name)}
      >
        {cart.length !== 0 && <CartCount>{cart.length} </CartCount>}
        Shoping cart
      </NavButton>
    </NavContainer>
  );
};
export default Navigation;
