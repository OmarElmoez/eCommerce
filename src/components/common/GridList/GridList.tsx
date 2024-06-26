import { TGridListProps } from "@/types";
import { HasId } from "@/types/gridList/gridList.types";

import { Col, Row } from "react-bootstrap";

const GridList = <T extends HasId>({
  records,
  renderItems,
}: TGridListProps<T>) => {
  const listItems =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
            key={record.id}
          >
            {renderItems(record)}
          </Col>
        ))
      : "No products found";

  return <Row>{listItems}</Row>;
};

export default GridList;
