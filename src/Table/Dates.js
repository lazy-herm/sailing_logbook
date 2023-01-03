import Row from "react-bootstrap/esm/Row";

const Dates = (props) => {
  const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
  const start_date = new Date(props.start_date).toLocaleDateString(
    "en-GB",
    options
  );
  const end_date = new Date(props.end_date).toLocaleDateString(
    "en-GB",
    options
  );
  return (
    <td>
      <Row>
        {start_date}
      </Row>
      <Row>
        {end_date}
      </Row>
    </td>
  );
};

export default Dates;
