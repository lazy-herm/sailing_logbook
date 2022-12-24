import React, { Fragment, useRef, useState } from "react";
import "select2/dist/css/select2.css";
import "../css/TagInput.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const TagInput = (props) => {
  const [listItems, setListItems] = useState([]);
  const textArea = useRef(null);

  const keyDownHandler = (event) => {
    if (["Tab", "Enter", ","].includes(event.key)) {
      const textValue = textArea.current.value;
      if (textValue.length !== 0) {
        event.preventDefault();

        setListItems((prevState) => {
          return [...prevState, textValue];
        });
        textArea.current.value = "";
      }
    }
  };
  const closeButton = (event) => {
    const idx = parseInt(event.target.attributes.index.value);
    setListItems((prevState) => prevState.filter((_, index) => index !== idx));
  };

  return (
    <Fragment>
      <select
        id="tags"
        className="form-control select2-hidden-accessible"
        aria-hidden="true"
        name={props.name}
        multiple
      ></select>
      <InputGroup
        style={{
          padding: "5px",
          flexDirection: "row",
          border: "1px solid #ced4da",
          margin: "2.5px 2.5px 2.5px 0px",
          borderRadius: "10px",
        }}
      >
        <Col>
          <Row>
            <Form.Label
              className="text-capitalize"
              style={{ textAlign: "left" }}
            >
              {" "}
              {props.label}
            </Form.Label>
          </Row>
          <Row style={{ margin: "auto 2.5px auto auto" }}>
            {listItems &&
              listItems.map((item, index) => {
                return (
                  <InputGroup
                    key={index}
                    style={{
                      margin: "2.5px",
                      width: "auto",
                      padding: "0",
                    }}
                  >
                    <Button
                      variant="outline-dark"
                      key={"1-" + index}
                      index={index}
                      onClick={closeButton}
                      style={{ borderRadius: "10px 0 0 10px" }}
                    >
                      x
                    </Button>
                    <Button
                      variant="outline-dark"
                      key={"2-" + index}
                      style={{
                        borderRadius: "0 10px 10px 0",
                        opacity: "1",
                      }}
                      disabled
                    >
                      {item}
                    </Button>
                  </InputGroup>
                );
              })}
            <Form.Control
              ref={textArea}
              onKeyDown={keyDownHandler}
              style={{
                display: "flex",
                borderRadius: "10px",
                marginLeft: "2.5px",
                width: "auto",
              }}
            />
          </Row>
          <Row>
            <Form.Text>
              Use Tab key to enter individual harbours/locations
            </Form.Text>
          </Row>
        </Col>
      </InputGroup>
    </Fragment>
  );
};

export default TagInput;
