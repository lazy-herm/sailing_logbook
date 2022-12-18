import Form from "react-bootstrap/Form";

const DateField = (props)=>{
    return(
        <Form.Group>
            <Form.Label className="text-capitalize">{props.label}</Form.Label>
            <Form.Control type='date' name={props.name}></Form.Control>
        </Form.Group>
    )
}

export default DateField;