import {
  actGetProductsWithItems,
  cartCleanUp,
  removeFromCart,
  updateQuantity,
} from "@/store/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCallback, useEffect } from "react";


const useCart = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsInfo, items } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsWithItems());

    return () => {
      dispatch(cartCleanUp());
    }
  }, [dispatch]);

  const productsWithQuantity = productsInfo.map((product) => {
    return { ...product, quantity: items[product.id] };
  });

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(updateQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  return {
    loading,
    error,
    productsInfo,
    productsWithQuantity,
    changeQuantityHandler,
    removeItemHandler,}
}

export default useCart