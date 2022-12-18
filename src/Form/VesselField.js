import Form from "react-bootstrap/Form";
import TextInput from "./TextInput";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../css/VesselField.css";

const VesselField = (props) => {
  return (
    <Row>
      <Form.Label>Vessel</Form.Label>
      <Col>
        <FloatingLabel className="text-capitalize" label="name">
          <Form.Control type="text" placeholder="text"></Form.Control>
        </FloatingLabel>
      </Col>
      <Col>
        <InputGroup size="lg">
          <FloatingLabel className="text-capitalize" label="size">
            <Form.Control type="text" placeholder="text"></Form.Control>
          </FloatingLabel>
          <Form.Select
            aria-label="Default select example"
            className="boatSize"
            style={{ "padding-right": 0}}
          >
            <option value="ft">ft</option>
            <option value="m">m</option>
          </Form.Select>
        </InputGroup>
      </Col>
      <Col>
        <FloatingLabel className="text-capitalize" label="sail/motor">
          <Form.Select aria-label="Default select example">
            <option value="sail">Sail</option>
            <option value="motor">Motor</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
  );
};

export default VesselField;
