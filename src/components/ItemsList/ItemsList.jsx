import React from 'react';

import { Container, ListItem } from './ItemsList.styled';
import Item from '../Item';

const ItemsList = ({ items, addToCart }) => {
  return (
    <Container>
      {items.map(item => (
        <ListItem key={item.id}>
          <Item
            id={item.id}
            name={item.name}
            price={item.price}
            url={item.url}
            addToCart={addToCart}
          />
        </ListItem>
      ))}
    </Container>
  );
};

export default ItemsList;
