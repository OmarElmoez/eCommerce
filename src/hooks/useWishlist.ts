import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetWishlistItems,
  wishlistCleanUp,
} from "@/store/wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();

  const { productsInfo, loading, error } = useAppSelector(
    (state) => state.wishlist
  );
  
  useEffect(() => {
    dispatch(actGetWishlistItems());

    return () => {
      dispatch(wishlistCleanUp());
    };
  }, [dispatch]);


  const records = productsInfo.map((record) => ({
    ...record,
    isLiked: true,
  }));

  return { records, loading, error };
}

export default useWishlist