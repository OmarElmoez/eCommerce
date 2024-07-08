import Lottie from "lottie-react";
import { error, loading, notFound, empty } from "@/assets/lottieFiles";

const lottieFiles = {
  error,
  loading,
  notFound,
  empty,
};

const LottieHandler = ({ type, msg }: { type: keyof typeof lottieFiles, msg?: string }) => {
  const lottie = lottieFiles[type];
  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <Lottie animationData={lottie} style={{ width: "600px" }} />
      <h2>{msg}</h2>
    </section>
  );
};

export default LottieHandler;
