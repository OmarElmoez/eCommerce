import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
  const renderedSkeletons = Array(4)
    .fill(0)
    .map((_, index) => (
      <Col
        xs={6}
        md={3}
        className="d-flex justify-content-center mb-5 mt-2"
        key={index}
      >
        <ContentLoader
          speed={2}
          width={180}
          height={200}
          viewBox="0 0 180 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="54" y="188" rx="3" ry="3" width="80" height="9" />
          <circle cx="92" cy="96" r="82" />
        </ContentLoader>
      </Col>
    ));
  return <Row>{renderedSkeletons}</Row>;
};

export default CategorySkeleton;
