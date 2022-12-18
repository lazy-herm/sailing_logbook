import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const TextInput = (props) => {
  return (
      <FloatingLabel className="text-capitalize" label={props.label}>
        <Form.Control type="text" placeholder="text"></Form.Control>
      </FloatingLabel>
  );
};

export default TextInput;
