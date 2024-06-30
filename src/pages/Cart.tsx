import { CartItemList, CartSubtotalPrice } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { useCart } from "@/hooks";
const Cart = () => {
  const {
    loading,
    error,
    productsInfo,
    productsWithQuantity,
    changeQuantityHandler,
    removeItemHandler,
  } = useCart();
  return (
    <Loading status={loading} error={error}>
      {productsInfo.length > 0 ? (
        <>
          <CartItemList
            products={productsWithQuantity}
            onChangeQuantity={changeQuantityHandler}
            onRemoveItem={removeItemHandler}
          />
          <CartSubtotalPrice products={productsWithQuantity} />
        </>
      ) : (
        "Cart is empty"
      )}
    </Loading>
  );
};

export default Cart;
