import { Fragment, useContext } from "react";
import AuthContext from "./AuthContext";
import { deleteData } from "./firebase";
import Dates from "./Table/Dates";
import SimpleCell from "./Table/SimpleCell";
import Vessel from "./Table/Vessel";
import Voyage from "./Table/Voyage";
import editImg from "./imgs/edit-20x20.png";
import closeImg from './imgs/close-20x20.png';

const LogTable = (props) => {
  const ctx = useContext(AuthContext);
  const deleteHandler = (event) => {
     deleteData("/logs/" + ctx.isLoggedIn + "/" + event.target.attributes.value.value);
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
              <Dates
                start_date={entry[1]["start date"]}
                end_date={entry[1]["end date"]}
              />
              <Vessel data={entry[1]} />
              <Voyage data={entry[1]} />
              <SimpleCell
                data={entry[1].days_onboard}
                unit="day"
                unitPlural="days"
              />
              <SimpleCell data={entry[1].distance} unit="NM" />
              <SimpleCell
                data={entry[1].night_hours}
                unit="hr"
                unitPLural="hrs"
              />
              <SimpleCell data={entry[1].skipper_name} />
              <td>
                <img src={editImg} alt="edit button" />
              
                <img src={closeImg} alt='delete button' onClick={deleteHandler} value={entry[0]} />
              </td>
            </tr>
          );
        })}
    </Fragment>
  );
};

export default LogTable;
