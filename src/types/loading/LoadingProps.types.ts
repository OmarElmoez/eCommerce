import { TLoading } from "../shared"

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type: "cart" | "category" | "product"
}

export default LoadingProps