import { Link } from "react-router-dom";
import { LottieHandler } from "@/components/feedback";

const Error = () => {

  return (
    <section className="notFound">
      <LottieHandler type="notFound" msg="Page Not Found" />
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </section>
  );
};

export default Error;
