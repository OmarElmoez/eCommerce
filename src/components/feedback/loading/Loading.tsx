import { LoadingProps } from "@/types";
import { CartSkeleton, CategorySkeleton, ProductSkeleton } from "../skeletons";
import LottieHandler from "../lottieHandler/LottieHandler";

const skeletons = {
  category: CategorySkeleton,
  cart: CartSkeleton,
  product: ProductSkeleton,
};

type LoadingPropsWithSkeleton = LoadingProps & { type: keyof typeof skeletons };

const Loading = ({
  status,
  error,
  children,
  type,
}: LoadingPropsWithSkeleton) => {
  const Skeleton = skeletons[type];

  if (status === "pending") {
    return <Skeleton />;
  }

  // also can be if (status === "failed")
  if (error) {
    return <LottieHandler type="error" msg={error} />;
  }

  return <>{children}</>;
};

export default Loading;
