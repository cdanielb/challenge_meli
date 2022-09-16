import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, InputGroup, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./search.scss";

const SearchComponent = (props) => {
  useEffect(() => {}, []);

  // const navigation = useNavigate();
  const [userSearch, setUserSearch] = useState("");

  return (
    <React.Fragment>
      <div
        className={`${props.value === 1 ? "div-search" : "div-search-header"}`}
      >
        <Form>
          <InputGroup
            className="mb-3 input-search"
            onChange={(e) => setUserSearch(e.target.value)}
          >
            <Form.Control
              placeholder="Nunca dejes de buscar"
              aria-label="Nunca dejes de buscar"
              className="control-search"
            />
            <Link to={{ pathname: `/items`, search: `?query=${userSearch}` }}>
              <Button type="submit" className="button-search">
                <Search />
              </Button>
            </Link>
          </InputGroup>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default SearchComponent;
