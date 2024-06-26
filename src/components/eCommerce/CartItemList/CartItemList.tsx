import { TCartItemListProps } from "@/types";
import CartItem from "../CartItem/CartItem";

const CartItemList = ({
  products,
  onChangeQuantity,
  onRemoveItem,
}: TCartItemListProps) => {
  const renderList = products.map((product) => (
    <CartItem
      key={product.id}
      {...product}
      onChangeQuantity={onChangeQuantity}
      onRemoveItem={onRemoveItem}
    />
  ));

  return <>{renderList}</>;
};

export default CartItemList;
