import { TLoading } from "../shared";
import IProduct from "./product.types";

interface IProductsState {
  records: IProduct[],
  loading: TLoading,
  error: null | string,
}

export default IProductsState