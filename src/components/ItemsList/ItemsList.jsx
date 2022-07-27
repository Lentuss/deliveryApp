import PropTypes from 'prop-types';

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

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
export default ItemsList;
