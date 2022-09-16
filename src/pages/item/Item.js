import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ItemsService from "../../services/items.service";
import { NumericFormat } from "react-number-format";
import "./item.scss";

const itemService = new ItemsService();

const ItemComponent = (props) => {
  const { id } = useParams();

  const [item, setItem] = useState();
  useEffect(() => {
    itemService.getItemInfo(id).then((r) => {
      let infoItem = [];
      infoItem.push(r.data);
      setItem(infoItem);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="container-responses">
        <div className="items-responses">
          <Container className="item">
            {item &&
              item.map((i) => {
                return (
                  <Row key={i.id}>
                    <Col md={12} xs={12}>
                      <Container>
                        <Row>
                          <Col md={{ span: 6, offset: 2 }}>
                            <img
                              src={i.pictures[0].secure_url}
                              className="img-item-ind"
                              alt={i.title}
                            />
                          </Col>
                          <Col md={{ span: 3 }} className="price-item title">
                            <strong>
                              <p>
                                {i.condition && "Nuevo"} - {i.sold_quantity}{" "}
                                vendidos
                                <p className="name-item">{i.title}</p>
                              </p>
                              <p className="p-price">
                                <NumericFormat
                                  value={i.price}
                                  displayType={"text"}
                                  thousandSeparator="."
                                  prefix={"$"}
                                  decimalScale={0}
                                  decimalSeparator=","
                                  className="price"
                                />
                                <NumericFormat
                                  value={i.price_decimals}
                                  displayType={"text"}
                                  className="price-decimals"
                                />
                              </p>
                            </strong>
                            <Button variant="primary" className="button">
                              Comprar
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col
                      md={{ span: 7, offset: 1 }}
                      xs={12}
                      className="description"
                    >
                      <strong>
                        <h4 className="title">Descripción del producto</h4>
                      </strong>
                      <p>{i.description_item.plain_text}</p>
                    </Col>
                    <Col md={3} xs={12}></Col>
                  </Row>
                );
              })}
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemComponent;
