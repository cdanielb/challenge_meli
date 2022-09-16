import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SearchComponent from "../pages/search/Search";
import logo from "../logo_meli.png";

const HeaderComponent = () => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [location]);
  if (!showSearch) {
    return <header className="header"></header>;
  } else {
    return (
      <React.Fragment>
        <header className="header">
          <Container>
            <Row>
              <Col md={1} xs={1}>
                <Link to="/">
                  <img src={logo} className="logo-header" alt="Mercado Libre" />
                </Link>
              </Col>
              <Col md={11} xs={{ span: 10, offset: 1 }}>
                <SearchComponent value={2} />
              </Col>
            </Row>
          </Container>
        </header>
      </React.Fragment>
    );
  }
};

export default HeaderComponent;
