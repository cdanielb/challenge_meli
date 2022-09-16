import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

const PaginatorComponent = ({ actualPage, data }) => {
  const navigation = useNavigate();
  const [dataPage, setDataPage] = useState(data.slice(0, 4));
  useEffect(() => {
    const dataInit = actualPage * 4;
    setDataPage(data.slice(dataInit, dataInit + 4));
  }, [actualPage, data]);

  const openItem = (event) => {
    navigation(`/items/${event}`);
  };
  return (
    <React.Fragment>
      <div className="container-responses">
        <div className="items-responses">
          <Container className="item">
            {dataPage &&
              dataPage.map((item) => {
                return (
                  <Row
                    key={item.id}
                    onClick={() => openItem(item.id)}
                    className="mouse-item"
                  >
                    <Col md={2} xs={12}>
                      <img
                        src={item.thumbnail}
                        className="img-item"
                        alt={item.title}
                      />
                    </Col>
                    <Col md={8} xs={12}>
                      <strong>
                        <NumericFormat
                          value={item.price}
                          displayType={"text"}
                          thousandSeparator="."
                          prefix={"$"}
                          decimalSeparator=","
                          className="info-item"
                        />
                        <p className="info-item">{item.title}</p>
                      </strong>
                    </Col>
                    <Col md={2} xs={12}>
                      {item.address.state_name}
                    </Col>
                    <hr />
                  </Row>
                );
              })}
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaginatorComponent;
