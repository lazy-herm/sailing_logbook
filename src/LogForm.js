import Form from "react-bootstrap/Form";
import React, { Fragment, useContext } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import app from "./firebase";
import {
  ref,
  getDatabase,
  update,
  push,
  child,
} from "firebase/database";
import AuthContext from "./AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './css/LogForm.css';

const LogForm = (props) => {
  const formRef = React.createRef();
  const ctx = useContext(AuthContext);
  const logFormHandler = (event) => {
    event.preventDefault();
    const db = getDatabase(app);
    onAuthStateChanged(getAuth(app), (user) => {
      if (user) {
        console.log("user is logged in");
        const uid = user.uid;
      } else {
        console.log("user is logged OUT");
      }
    });
    const key = "logs/" + ctx.isLoggedIn;
    const newPostKey = push(child(ref(db), key)).key;
    const formData = new FormData(formRef.current);
    const updateData = {};
    for (const [key, value] of formData.entries()) {
      updateData[key] = value;
    }
    const upd = {};
    upd[key+'/'+newPostKey] = updateData;

    update(ref(db), upd)
      .then(() => {
        console.log("updated");
      })
      .catch((error) => {
        // The write failed...
        console.log("failed update");
        console.log(error);
      });
  };

  return (
    <Fragment>
      <tr style={{display:props.class}}>
        <td colSpan={props.fields.length}>
          <Form ref={formRef} onSubmit={logFormHandler}>
            <Row>
              {props.fields.map((field,index) => {
                return (
                  <Col key={'col'+index}>
                    {field.sub_field &&
                      field.sub_field.map((subfield) => {
                        return (
                          <Form.Group key={'fromGroup'+subfield.name}>
                            <Form.Label className="text-capitalize">
                              {subfield.name}
                            </Form.Label>
                            <Form.Control
                              type={subfield.type}
                              name={subfield.name}
                            ></Form.Control>
                          </Form.Group>
                        );
                      })}
                    {!field.sub_field && (
                      <Form.Group>
                        <Form.Label className="text-capitalize">
                          {field.name}
                        </Form.Label>
                        <Form.Control
                          type={field.type}
                          name={field.name}
                        ></Form.Control>
                      </Form.Group>
                    )}
                  </Col>
                );
              })}
            </Row>
            <Button type="submit" size="sm" className="btn-block">
              Add
            </Button>
          </Form>
        </td>
      </tr>
    </Fragment>
  );
};

export default LogForm;