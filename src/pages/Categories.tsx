import { GridList } from "@/components/common";
import { Category } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { useCategories } from "@/hooks";
import { Container } from "react-bootstrap";

const Categories = () => {
  const { records, loading, error } = useCategories();
  return (
    <Container>
      <Loading status={loading} error={error} type="category">
        <GridList
          records={records}
          renderItems={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
