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
export default ShopList;
