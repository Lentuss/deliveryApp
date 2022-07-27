import PropTypes from 'prop-types';
import { List, ShopListItem, Shop } from './ShopsList.styled';

const ShopList = ({ names, onClick, isDisabled }) => {
  // console.log(isDisabled());
  return (
    <List>
      {names.map(shop => (
        <ShopListItem key={shop}>
          <Shop
            type="button"
            disabled={isDisabled(shop)}
            onClick={() => onClick(shop)}
          >
            {shop}
          </Shop>
        </ShopListItem>
      ))}
    </List>
  );
};

ShopList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.any.isRequired,
};

export default ShopList;
