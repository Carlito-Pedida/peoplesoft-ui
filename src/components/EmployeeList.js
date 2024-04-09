import React, { useContext } from "react";
import EmployeeContext from "../contexts/EmployeeContext";
import { Link, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import moment from "moment";
import "../Styles/EmployeeList.css";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

function EmployeeList() {
  let navigate = useNavigate();

  let { deleteEmployee } = useContext(EmployeeContext);

  function handleDelete(_id) {
    window.confirm("Are you sure you like to delete this employee record?");
    deleteEmployee(_id)
      .then(() => {
        window.alert("Employee Record will be Deleted!");
        navigate("/employed");
      })
      .catch((error) => {
        console.log(error);
        window.alert("You are not authorized to perform this operation");
        navigate("/signin");
      });
  }

  return (
    <EmployeeContext.Consumer>
      {({ employee }) => {
        return (
          <div>
            <Link className="button" to="/employee/new">
              Add New Employee Record
            </Link>
            <h1 className="my-3">Employee Records</h1>

            {console.log(employee)}
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Edit Record</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Employment</th>
                    <th>Salary/Wages</th>
                    <th>Date Hired</th>
                    <th>Delete Record</th>
                  </tr>
                </thead>

                {employee.map((emp) => {
                  return (
                    <tbody>
                      <tr key={emp._id}>
                        <td>{emp.badge_number}</td>
                        <td>
                          <img
                            src={emp.imageUrl}
                            height={35}
                            className="px-3"
                            style={{ borderRadius: "50%" }}
                          />
                          <Link to={`/employee_profile/${emp._id}`}>
                            <strong>
                              {emp.first_name} {emp.last_name}
                            </strong>
                          </Link>
                        </td>
                        <td className="text-center">
                          <Link to={`/employee/edit/${emp._id}`}>
                            <FaRegEdit color="green" size={20} />
                          </Link>
                        </td>
                        <td>{emp.phone}</td>
                        <td>{emp.email}</td>
                        <td>{emp.position}</td>
                        <td>{emp.type}</td>
                        <td>{emp.salary}/annual</td>
                        <td>
                          {moment.parseZone().local(emp.hire_date).format("LL")}
                        </td>
                        <td className="text-center">
                          <Link
                            to={"/employed"}
                            onClick={handleDelete.bind(this, emp._id)}
                          >
                            <FaTrashAlt color="red" size={20} />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </div>
          </div>
        );
      }}
    </EmployeeContext.Consumer>
  );
}

export default EmployeeList;

{
  /* <Link to={`/employee/edit/${emp._id}`}>Edit</Link>
                    <span> | </span>
                    <Link
                      to={"/employee/"}
                      onClick={handleDelete.bind(this, emp._id)}
                    >
                      Delete Employee
                    </Link> */
}
