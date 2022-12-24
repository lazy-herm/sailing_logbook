import Form from "react-bootstrap/Form";
import React, { Fragment, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import updateData from "../firebase";
import AuthContext from "../AuthContext";
import "../css/LogForm.css";
import DateField from "./DateField";
import VesselField from "./VesselField";
import VoyageFields from "./VoyageFields";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

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
                <VesselField />
              </Col>
            </Row>
            <Row>
              <Col>
                <VoyageFields></VoyageFields>
              </Col>
            </Row>
            <Row>
              <Col>
                <NumberInput
                  name="days_onboard"
                  label="days on board"
                  units="day(s)"
                ></NumberInput>
              </Col>
              <Col>
                <NumberInput
                  name="distance"
                  label="distance"
                  units="NM"
                ></NumberInput>
              </Col>
              <Col>
                <NumberInput
                  name="night_hours"
                  label="night hours"
                  units="hr(s)"
                ></NumberInput>
              </Col>
              <Col>
                <TextInput name="skipper_name" label="skipper name" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="submit" size="sm" className="btn-block">
                  Add
                </Button>
              </Col>
            </Row>
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
