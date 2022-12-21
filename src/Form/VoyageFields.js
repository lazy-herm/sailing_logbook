import TagInput from "./TagInput";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VoyageFields = () => {
  return (
    <Row>
      <Form.Label>Voyage</Form.Label>
      <Col>
        <TagInput name='harbours_visited' label='visited harbours'/>
      </Col>
    </Row>
  );
};

export default VoyageFields;
