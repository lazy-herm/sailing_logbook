import Form from "react-bootstrap/Form";
import React, { Fragment, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import updateData from "./firebase";
import AuthContext from "./AuthContext";
import "./css/LogForm.css";
import DateField from "./Form/DateField";
import VesselField from "./Form/VesselField";


const LogForm = (props) => {
  const formRef = React.createRef();
  const ctx = useContext(AuthContext);
  const [logFormClass, setLogFormClass] = useState("none");
  const [addLogButton, setAddLogButton] = useState("inline-block");
  const [cancelLogButton, setCancelLogButton] = useState("none");

  const addLogButtonHandler = () => {
    if (addLogButton === "inline-block") {
      setLogFormClass("table-row");
      setAddLogButton("none");
      setCancelLogButton("inline-block");
    } else {
      setLogFormClass("none");
      setAddLogButton("inline-block");
      setCancelLogButton("none");
    }
  };
  const logFormHandler = (event) => {
    event.preventDefault();
    updateData("/logs" + ctx.isLoggedIn, new FormData(formRef.current));
  };

  return (
    <Fragment>
      <tr style={{ display: logFormClass }}>
        <td colSpan={props.fields.length}>
          <Form ref={formRef} onSubmit={logFormHandler}>
            <Row>
              <Col>
                <DateField label="start date" name="start date"></DateField>
              </Col>
              <Col>
                <DateField label="end date" name="end date"></DateField>
              </Col>
            </Row>
            <Row>
              <Col>
              <VesselField></VesselField>
              </Col>
              <Col>
              </Col>
            </Row>
            <Row>
              {props.fields.map((field, index) => {
                return (
                  <Col key={"col" + index}>
                    {field.sub_field &&
                      field.sub_field.map((subfield) => {
                        return (
                          <Form.Group key={"fromGroup" + subfield.name}>
                            <Form.Label className="text-capitalize">
                              {subfield.name}
                            </Form.Label>
                            <Form.Control
                              type={subfield.type}
                              name={subfield.name}
                            ></Form.Control>
                          </Form.Group>
                        );
                      })}
                    {!field.sub_field && (
                      <Form.Group>
                        <Form.Label className="text-capitalize">
                          {field.name}
                        </Form.Label>
                        <Form.Control
                          type={field.type}
                          name={field.name}
                        ></Form.Control>
                      </Form.Group>
                    )}
                  </Col>
                );
              })}
            </Row>
            <Button type="submit" size="sm" className="btn-block">
              Add
            </Button>
          </Form>
        </td>
      </tr>
      <tr>
        <td colSpan={props.colspan}>
          <Button
            onClick={addLogButtonHandler}
            style={{ display: addLogButton }}
          >
            Add Log
          </Button>
          <Button
            onClick={addLogButtonHandler}
            style={{ display: cancelLogButton }}
          >
            Cancel New Log
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default LogForm;
