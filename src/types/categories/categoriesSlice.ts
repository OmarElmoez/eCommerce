import { TLoading } from "../shared";
import ICategory from "./category";

interface ICategoriesState {
  records: ICategory[],
  loading: TLoading,
  error: string | null
}

export default ICategoriesState