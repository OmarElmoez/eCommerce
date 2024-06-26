import { useEffect } from "react";
import { GridList } from "@/components/common";
import { Product } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetWishlistItems,
  wishlistCleanUp,
} from "@/store/wishlist/wishlistSlice";

const Wishlist = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetWishlistItems());

    return () => {
      dispatch(wishlistCleanUp());
    };
  }, [dispatch]);

  const { productsInfo, loading, error } = useAppSelector(
    (state) => state.wishlist
  );

  const records = productsInfo.map((record) => ({
    ...record,
    isLiked: true,
  }));

  return (
    <Loading status={loading} error={error}>
      <GridList
        records={records}
        renderItems={(record) => <Product {...record} />}
      />
    </Loading>
  );
};

export default Wishlist;
