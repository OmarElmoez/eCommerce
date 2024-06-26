import IProduct from "../products/product.types";
import { TLoading } from "../shared";

interface IWishlistState {
  itemsIds: number[];
  productsInfo: IProduct[];
  loading: TLoading;
  error: null | string;
}

export default IWishlistState