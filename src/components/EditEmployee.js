import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeContext from "../contexts/EmployeeContext";
import moment from "moment";

const EditEmployee = () => {
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

  // function handleChange(event) {
  //   setEmployee((prevValue) => {
  //     return { ...prevValue, [event.target.name]: event.target.value };
  //   });
  // }
  function handleChange(event) {
    const { name, value } = event.target;
    let formattedValue = value;

    // Check if the changed field is 'hire_date'
    if (name === "hire_date") {
      // Parse the date string
      const date = new Date(value);
      // Format the date as yyyy-mm-dd
      formattedValue = date.toISOString().split("T")[0];
    }

    setEmployee((prevValue) => {
      return { ...prevValue, [name]: formattedValue };
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
    <form onSubmit={handleSubmit}>
      <h1>EDIT Employee</h1>
      <span>Position </span>
      <input
        placeholder="Enter Job Position"
        type="text"
        name="position"
        value={position}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>First Name </span>
      <input
        placeholder="Enter First Name"
        type="text"
        name="first_name"
        value={first_name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Last Name </span>
      <input
        placeholder="Enter Last Name"
        type="text"
        name="last_name"
        value={last_name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Gender </span>
      <select name="gender" value={gender} onChange={handleChange}>
        <option>Choose Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Non-Binary</option>
      </select>
      <br></br>
      <br></br>
      <span>Photo </span>
      <input
        placeholder="Enter Image URL"
        type="text"
        name="imageUrl"
        value={imageUrl}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Email </span>
      <input
        placeholder="Enter Email"
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <span>Phone </span>
      <input
        placeholder="Enter Phone Number"
        type="text"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Badge Number </span>
      <input
        placeholder="Enter Badge Number"
        type="number"
        name="badge_number"
        value={badge_number}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <span>Date of Hire </span>
      <input
        placeholder="Enter Badge Number"
        type="text"
        name="hire_date"
        value={moment.parseZone().local(hire_date).format("LL")}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Employment Type </span>
      <select name="type" value={type} onChange={handleChange}>
        <option>Choose Employment Type</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Contract</option>
        <option>Intern</option>
      </select>
      <br></br>
      <br></br>
      <span>Benefit Package </span>
      <select name="benefits" value={benefits} onChange={handleChange}>
        <option>Choose Benefit Option</option>
        <option>Package 1 with Full Health Coverage</option>
        <option>Package 2 with Stock Options</option>
        <option>Package 3 with Bonuses and Incentives</option>
        <option>Package 5 with Employee Assistance Program</option>
        <option>Not Qualified</option>
      </select>
      <br></br>
      <br></br>
      <span>Salary/Wages </span>
      <input
        placeholder="Enter Address"
        type="text"
        name="salary"
        value={salary}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Length of Service </span>
      <input
        placeholder="Enter length_of_service"
        type="number"
        name="length_of_service"
        value={length_of_service}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <span>Address </span>
      <input
        placeholder="Enter Address"
        type="text"
        name="address"
        value={address}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>City </span>
      <input
        placeholder="Enter City"
        type="text"
        name="city"
        value={city}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>State </span>
      <input
        placeholder="Enter State"
        type="text"
        name="state"
        value={state}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>zipcode </span>
      <input
        placeholder="Enter Zipcode"
        type="text"
        name="zip"
        value={zip}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <button>Update Employee Information</button>
    </form>
  );
};

export default EditEmployee;
