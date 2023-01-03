import { Fragment, useContext } from "react";
import Button from 'react-bootstrap/Button';
import AuthContext from "./AuthContext";
import { deleteData } from "./firebase";
import Dates from "./Table/Dates";
import SimpleCell from "./Table/SimpleCell";
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
              <SimpleCell data={entry[1].days_onboard} unit='day' unitPlural='days' />
              <SimpleCell data={entry[1].distance} unit="NM" />
              <SimpleCell data={entry[1].night_hours} unit="hr" unitPLural='hrs' />
              <SimpleCell data={entry[1].skipper_name} />
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
