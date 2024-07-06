import { Product } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { GridList } from "@/components/common";
import { Container } from "react-bootstrap";
import { useProducts } from "@/hooks";

const Products = () => {
  const { loading, error, recordsWithQuantity } = useProducts();
  return (
    <Container>
      <Loading status={loading} error={error} type="product">
        <GridList
          records={recordsWithQuantity}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
