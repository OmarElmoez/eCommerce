import { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const getWishListTotalQuantity = createSelector(
  (state: RootState) => state.wishlist.itemsIds,
  (items) => {
    return Object.values(items).length;
  }
);


