import { TLoading } from "../shared"

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
}

export default LoadingProps