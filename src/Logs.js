import { db } from "./firebase";
import AuthContext from "./AuthContext";
import { useContext, useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import LogTable from "./LogTable";
import LogForm from "./Form/LogForm";
import Table from "react-bootstrap/Table";

const Logs = () => {
  const ctx = useContext(AuthContext);
  const [logData, setLogData] = useState(null);  
  useEffect(() => {
    const userRef = ref(db, "logs/" + ctx.isLoggedIn);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setLogData(data);
    });
  }, [ctx.isLoggedIn]);
  const fields = [
    {
      name: "dates",
      sub_field: [
        { name: "start date", type: "date" },
        { name: "end date", type: "date" },
      ],
    },
    { name: "vessel", type: "text" },
    { name: "voyage", type: "text" },
    { name: "days on board", type: "number" },
    { name: "distance", type: "number" },
    { name: "night hours", type: "number" },
    { name: "skipper signature", type: "text" },
  ];

  return (
    <div className="container-lg">
      <Table>
        <thead>
          <tr>
            {fields.map((field) => {
              return (
                <th className="text-capitalize" key={field.name}>
                  {field.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <LogTable data={logData} fields={fields}></LogTable>
          <LogForm fields={fields} colspan={fields.length}></LogForm>
        </tbody>
      </Table>
    </div>
  );
};

export default Logs;
