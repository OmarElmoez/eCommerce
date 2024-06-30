import { GridList } from "@/components/common";
import { Category } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import {
  actGetCategories,
  categoriesCleanUp,
} from "@/store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { useEffect } from "react";
import { Container } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());

    return () => {
      dispatch(categoriesCleanUp());
    };
  }, [dispatch]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItems={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
