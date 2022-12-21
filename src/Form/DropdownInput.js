import Form from "react-bootstrap/Form";

const DropdownInput = (props) => {
  return (
    <Form.Select name={props.name} className='text-capitalize' style={{'paddingRight':0}}>
      {props.options.map((option,index) => {
        return (
          <option value={option} className="text-capitalize" key={option+index}>
            {option}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default DropdownInput;
