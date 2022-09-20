import React, { useEffect, useState } from "react";

const port = "3001";
const apiUrl = `http://localhost:${port}`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [devices, setDevices] = useState();
  const [employees, setEmployees] = useState();

  const getData = async () => {
    try {
      const devices = await fetch(apiUrl + "/devices").then((response) =>
        response.json()
      );
      const employees = await fetch(apiUrl + "/employees").then((response) =>
        response.json()
      );
      setDevices(devices);
      setEmployees(employees);
    } catch (e) {
      throw new Error(
        "Api not running, please check if you started the api using 'yarn start-api' and verify the ports"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <h1>Loading</h1>;
  if (!devices || !employees) return <h1>Api not running</h1>;

  const getDevices = () => {
    return devices.map((device) => (
      <div key={device.id} style={{ marginBottom: "10px" }}>
        <div>
          {device.brand} {device.product}
        </div>
        <div>{device.serialNumber}</div>
        <div>{device.available ? "Available" : "Unavailable"}</div>
      </div>
    ));
  };

  const getEmployees = () => {
    return employees.map((employee) => (
      <div key={employee.id} style={{ marginBottom: "10px" }}>
        <div style={{ fontWeight: "bold" }}>{employee.name}</div>
        <div> {employee.role}</div>
        <div>{employee.email} </div>
      </div>
    ));
  };
  return (
    <div style={{ display: "flex", margin: "10px" }}>
      <div id="devices" style={{ marginRight: "20px" }}>
        <h2>Devices</h2>
        {getDevices()}
      </div>
      <div id="employees">
        <h2>Employees</h2>
        {getEmployees()}
      </div>
    </div>
  );
};

export default App;
