import { GridList } from "@/components/common";
import { Product } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { useWishlist } from "@/hooks";

const Wishlist = () => {
  const { records, loading, error } = useWishlist();
  return (
    <Loading status={loading} error={error} type="product">
      <GridList
        records={records}
        renderItems={(record) => <Product {...record} />}
      />
    </Loading>
  );
};

export default Wishlist;
