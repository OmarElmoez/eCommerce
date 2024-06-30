import {
  actGetCategories,
  categoriesCleanUp,
} from "@/store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { useEffect } from "react";
const useCategories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promise = dispatch(actGetCategories());

    return () => {
      dispatch(categoriesCleanUp());

      promise.abort();
    };
  }, [dispatch]);

  return { records, loading, error };
}

export default useCategories