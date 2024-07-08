import { Suspense } from "react";
import LottieHandler from "../lottieHandler/LottieHandler";

const PageSuspense = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={<LottieHandler type="loading" msg="Loading, please wait..." />}
    >
      {children}
    </Suspense>
  );
};

export default PageSuspense;
