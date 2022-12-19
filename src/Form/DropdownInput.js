import Form from "react-bootstrap/Form";

const DropdownInput = (props) => {
  return (
    <Form.Select name={props.name} className='text-capitalize' style={{'padding-right':0}}>
      {props.options.map((option) => {
        return (
          <option value={option} className="text-capitalize">
            {option}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default DropdownInput;
