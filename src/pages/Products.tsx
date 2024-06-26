import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProducts,
  productsCleanUp,
} from "@/store/products/productsSlice";
import { Product } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { Container } from "react-bootstrap";
import { GridList } from "@/components/common";

const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListIds = useAppSelector((state) => state.wishlist.itemsIds);

  const recordsWithQuantity = records.map((record) => ({
    ...record,
    quantity: cartItems[record.id] || 0,
    isLiked: wishListIds.includes(record.id)
  }));

  useEffect(() => {
    dispatch(actGetProducts(prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={recordsWithQuantity}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
