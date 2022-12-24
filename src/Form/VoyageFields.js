import TagInput from "./TagInput";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";

const VoyageFields = () => {
  //harbour visited
  //event name
  //capacity of role
  //max wind force
  return (
    <Row>
      <Form.Label>Voyage</Form.Label>
      <Col>
        <Row>
          <Col>
            <TagInput name="harbours_visited" label="visited harbours" />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput name="event" label="event" />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <TextInput name="role" label="capacity of role" />
          </Col>
        </Row>
        <Row>
          <Col>
            <NumberInput
              name="max_wind_speed"
              label="max wind speed"
              units="knt"
            ></NumberInput>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default VoyageFields;
