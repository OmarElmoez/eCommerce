import IProduct from "../products/product.types";
import { TLoading } from "../shared";

interface ICartState {
  items: {[key: string]: number};
  productsInfo: IProduct[],
  loading: TLoading
  error: null | string
}

export default ICartState