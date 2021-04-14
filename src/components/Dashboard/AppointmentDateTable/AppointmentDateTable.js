import React from "react";

const AppointmentDataTable = ({ appointment }) => {
  console.log("get appoint", appointment);
  return (
    <div className="container-fluid row">
      <div className="col-md-10">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">
                Sr No
              </th>
              <th className="text-secondary" scope="col">
                Name
              </th>
              <th className="text-secondary" scope="col">
                Gender
              </th>
              <th className="text-secondary" scope="col">
                Age
              </th>
              <th className="text-secondary" scope="col">
                Weight
              </th>
              <th className="text-secondary" scope="col">
                Phone
              </th>
              <th className="text-secondary" scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((appoint, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{appoint.name}</td>
                <td>{appoint.gender}</td>
                <td>{appoint.age}</td>
                <td>{appoint.weight}KG</td>
                <td>{appoint.phone}</td>
                <td>{appoint.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentDataTable;
