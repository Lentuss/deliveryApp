import { List, ShopListItem, Shop } from './ShopsList.styled';

const ShopList = ({ names, onClick }) => {
  return (
    <List>
      {names.map(shop => (
        <ShopListItem key={shop}>
          <Shop type="button" onClick={() => onClick(shop)}>
            {shop}
          </Shop>
        </ShopListItem>
      ))}
    </List>
  );
};
export default ShopList;
