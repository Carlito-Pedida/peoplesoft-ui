import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeContext from "../contexts/EmployeeContext";
import Table from "react-bootstrap/Table";
import moment from "moment";

const EmployeeFax = () => {
  let params = useParams();
  let [employee, setEmployee] = useState({
    _id: params.employeeId,
    first_name: "",
    last_name: "",
    gender: "",
    imageUrl: "",
    email: "",
    phone: "",
    badge_number: "",
    position: "",
    hire_date: "",
    type: "",
    benefits: "",
    salary: "",
    length_of_service: 0,
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  let { getEmployee, updateEmployee } = useContext(EmployeeContext);
  let navigate = useNavigate();
  let {
    first_name,
    last_name,
    gender,
    imageUrl,
    email,
    phone,
    badge_number,
    position,
    hire_date,
    type,
    benefits,
    salary,
    length_of_service,
    address,
    city,
    state,
    zip,
    _id
  } = employee;

  useEffect(() => {
    if (_id === undefined) return;
    async function fetch() {
      await getEmployee(_id).then((response) => setEmployee(response));
    }
    fetch();
  }, []);

  function handleChange(event) {
    setEmployee((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function update() {
    return updateEmployee(employee);
  }

  function handleSubmit(event) {
    event.preventDefault();
    update(employee)
      .then(() => {
        if (!employee.ok) {
          alert(`${employee.first_name} ${employee.last_name} is updated!`);
          navigate("/employed");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("You are not allowed to perform this operation");
        navigate("/signIn");
      });
  }

  return (
    <div className="profile-case">
      <div className="profile-box row">
        <div className="col-3">
          <img height={400} src={imageUrl} />
        </div>
        <div
          style={{
            border: "solid 6px white",
            padding: "30px",
            borderRadius: "15px"
          }}
          className="col-8"
        >
          <Table size="xl" style={{ height: "35px" }} striped bordered hover>
            <thead>
              <th>
                <h3>
                  {first_name} {last_name}
                </h3>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Position: {position}</td>
                <td>
                  Hire Date: {moment.parseZone().local(hire_date).format("LL")}
                </td>
                <td>Lenght of Service: {length_of_service} year/s</td>
              </tr>
              <tr>
                <td>First Name: {first_name}</td>
                <td>Last Name: {last_name}</td>
                <td>Gender: {gender}</td>
              </tr>
              <tr>
                <td>Employee ID: {badge_number} </td>
                <td>Email {email} </td>
                <td>Phone {phone} </td>
              </tr>
              <tr>
                <td>Employment Type: {type} </td>
                <td>Salary/Wages: {salary} </td>
                <td>Benefit Package: {benefits} </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Address: {address}</td>
                <td>{city}</td>
                <td>
                  {state} {zip}
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="mt-4">
            <Link className=" me-3 updateLink" to={`/employee/${_id}/update`}>
              Update Profile
            </Link>
            <Link className="updateLink" to="/employed">
              Return to Employee Records
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EmployeeFax;
