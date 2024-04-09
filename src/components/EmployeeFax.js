import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeContext from "../contexts/EmployeeContext";

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
    <div>
      <p>{first_name}</p>
      <img src={imageUrl} />
    </div>
  );
};

export default EmployeeFax;
