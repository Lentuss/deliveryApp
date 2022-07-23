import React from 'react';
import { NavContainer, NavButton } from './Navigation.styled';

const Navigation = ({ onClick }) => {
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
        Shoping cart
      </NavButton>
    </NavContainer>
  );
};
export default Navigation;
