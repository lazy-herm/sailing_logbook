import Form from "react-bootstrap/Form";
import TextInput from "./TextInput";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import DropdownInput from "./DropdownInput";

const VesselField = (props) => {
  return (
    <Row>
      <Form.Label>Vessel</Form.Label>
      <Col>
        <TextInput label="name" name="vessel_name" />
      </Col>
      <Col>
        <InputGroup size="lg">
          <TextInput label="size" name="vessel_length" />
          <DropdownInput options={['ft', 'm']} name='vessel_length_unit'/>
        </InputGroup>
      </Col>
      <Col>
        <FloatingLabel className="text-capitalize" label="sail/motor">
            <DropdownInput options={['sail', 'motor']} name='vessel_type'/>
        </FloatingLabel>
      </Col>
    </Row>
  );
};

export default VesselField;
