const LogTable = (props) => {
  return (
    <tr>
      {!props.data && <td colSpan={props.fields.length}>No Logs Found</td>}
      {props.data && props.data.map((entry)=>{
        <td colSpan={props.fields.length}>{entry}</td>
      })}
    </tr>
  );
};

export default LogTable;
