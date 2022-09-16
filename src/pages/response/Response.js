import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Pagination, Container, Row, Col, Spinner } from "react-bootstrap";
import ItemService from "../../services/items.service";
import "./response.scss";
import PaginatorComponent from "../../components/paginator.component";

const itemService = new ItemService();

const ResponseComponent = (props) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userSearch = params.get("query");
  const [data, setData] = useState();
  const [pags, setPags] = useState([]);
  const [actualPage, setActualPage] = useState();
  useEffect(() => {
    itemService.getQueryResult(userSearch).then((r) => {
      setData(r.data);
      const array = new Array(r.pags);
      setPags(array.fill(0, 0, array.length));
      setActualPage(1);
    });
  }, [userSearch]);

  const changePage = (page) => {
    if (page === 0) page = 1;
    if (page === pags.length + 1) page = 13;
    setActualPage(page);
  };

  if (data) {
    let halfPags = 4;
    let block = Math.ceil(actualPage / halfPags);
    return (
      <React.Fragment>
        <PaginatorComponent actualPage={actualPage - 1} data={data} />
        <Container className="paginator">
          <Row>
            <Col md={12} xs={{ span: 10, offset: 1 }}>
              <Pagination>
                <Pagination.First onClick={() => changePage(1)} />
                <Pagination.Prev onClick={() => changePage(actualPage - 1)} />
                {actualPage > halfPags && (
                  <Pagination.Ellipsis
                    onClick={() => changePage((block - 1) * halfPags)}
                  />
                )}
                {pags &&
                  pags.map((i, index) => {
                    if (
                      index + 1 <= halfPags * block &&
                      index + 1 >= halfPags * block - 3
                    ) {
                      return (
                        <Pagination.Item
                          key={index}
                          onClick={() => changePage(index + 1)}
                          active={actualPage === index + 1}
                        >
                          {index + 1}
                        </Pagination.Item>
                      );
                    }
                  })}
                {block < Math.ceil(pags.length / halfPags) && (
                  <Pagination.Ellipsis
                    onClick={() => changePage(block * halfPags + 1)}
                  />
                )}
                <Pagination.Next onClick={() => changePage(actualPage + 1)} />
                <Pagination.Last onClick={() => changePage(pags.length)} />
              </Pagination>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="container-responses">
          <div className="items-responses">
            <div className="spinner-group">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // <Select>
  //               {medios.map((item) => (
  //                 <Select.Option key={item.id} >{item.nombre}</Select.Option>
  //               ))}
  //             </Select>
};

export default ResponseComponent;
