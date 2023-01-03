import { Fragment, useContext } from "react";
import Button from 'react-bootstrap/Button';
import AuthContext from "./AuthContext";
import { deleteData } from "./firebase";
import Dates from "./Table/Dates";
import Vessel from './Table/Vessel';
import Voyage from './Table/Voyage';

const LogTable = (props) => {
  const ctx = useContext(AuthContext);
  const deleteHandler = (event) => {
    deleteData('/logs/'+ctx.isLoggedIn+'/'+event.target.value);
  };

  return (
    <Fragment>
      {!props.data && (
        <tr>
          <td colSpan={props.fields.length}>No Logs Found</td>
        </tr>
      )}
      {props.data &&
        Object.entries(props.data).map((entry, index) => {
          return (
            <tr key={index}>
              <Dates start_date={entry[1]['start date']} end_date={entry[1]['end date']} />
              <Vessel data={entry[1]} />
              <Voyage data={entry[1]} />
              {props.fields.map((field, index) => {
                if (field.sub_field) {
                  return (
                    <td key={index}>
                      {field.sub_field.map((subfield) => {
                        return Object.entries(entry[1]).map(
                          (logdetail, index) => {
                            return (
                              logdetail[0] === subfield.name && (
                                <p key={index}>{logdetail[1]}</p>
                              )
                            );
                          }
                        );
                      })}
                    </td>
                  );
                } else {
                  return (
                    <td key={index}>
                      {Object.entries(entry[1]).map((logdetail) => {
                        return logdetail[0] === field.name && logdetail[1];
                      })}
                    </td>
                  );
                }
              })}
              <td>
                <Button onClick={deleteHandler} value={entry[0]}>x</Button>
              </td>
            </tr>
          );
        })}
    </Fragment>
  );
};

export default LogTable;
