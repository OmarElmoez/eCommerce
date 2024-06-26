import { LoadingProps } from "@/types";

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return <p>Loading...</p>;
  }


  // also can be if (status === "failed")
  if (error) {
    return <p>Error: {error}</p>;
  }


  return <>{children}</>;
};

export default Loading;
