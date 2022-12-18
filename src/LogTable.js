import { Fragment } from "react";

const LogTable = (props) => {
  return (
    <Fragment>
      {!props.data && (
        <tr>
          <td colSpan={props.fields.length}>No Logs Found</td>
        </tr>
      )}
      {props.data &&
        Object.entries(props.data).map((entry) => {
          return (
            <tr>
              {props.fields.map((field) => {
                if (field.sub_field) {
                  return (
                    <td>
                      {field.sub_field.map((subfield) => {
                        return Object.entries(entry[1]).map((logdetail) => {
                          return logdetail[0] === subfield.name && <p>{logdetail[1]}</p>;
                        });
                      })}
                    </td>
                  );
                } else {
                  return (
                    <td>
                      {Object.entries(entry[1]).map((logdetail) => {
                        return logdetail[0] === field.name && logdetail[1];
                      })}
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
    </Fragment>
  );
};

export default LogTable;
