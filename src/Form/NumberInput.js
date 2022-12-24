import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";

const TextInput = (props) => {
  return (
    <InputGroup>
      <FloatingLabel className="text-capitalize" label={props.label}>
        <Form.Control
          type="number"
          placeholder="text"
          name={props.name}
          min={0}
        ></Form.Control>
        
      </FloatingLabel>
      {props.units && (
          <InputGroup.Text id="basic-addon2">{props.units}</InputGroup.Text>
        )}
    </InputGroup>
  );
};

export default TextInput;
