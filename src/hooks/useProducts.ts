import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProducts,
  productsCleanUp,
} from "@/store/products/productsSlice";
const useProducts = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListIds = useAppSelector((state) => state.wishlist.itemsIds);

  const recordsWithQuantity = records.map((record) => ({
    ...record,
    quantity: cartItems[record.id] || 0,
    isLiked: wishListIds.includes(record.id),
  }));

  useEffect(() => {
    const promise = dispatch(actGetProducts(prefix as string));

    return () => {
      dispatch(productsCleanUp());

      promise.abort();
    };
  }, [dispatch, prefix]);

  return { loading, error, recordsWithQuantity };
};

export default useProducts;
