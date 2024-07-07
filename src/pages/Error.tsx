import Lottie from "lottie-react";
import NotFoundLottie from "../assets/lottieFiles/notFound.json";
import { Link } from "react-router-dom";


const Error = () => {


  return (
    <section className="notFound">
      <Lottie animationData={NotFoundLottie} style={{ width: "600px" }} />
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </section>
  );
};

export default Error;
