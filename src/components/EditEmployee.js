import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeContext from "../contexts/EmployeeContext";
import styles from "../Styles/EmpAddEdit.module.css";

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
    /* eslint-disable-next-line */
  }, []);

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
        navigate("/employed");
      });
  }

  return (
    <div className={styles.empFaxFormCase2}>
      <Form className="" onSubmit={handleSubmit} key={_id}>
        <h1>Update Employee Information</h1>
        <Stack className="mx-auto" gap={2}>
          <Row>
            <Col>
              <span>Position </span>
              <Form.Control
                placeholder="Enter Job Position"
                type="text"
                name="position"
                value={position}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <span>Date of Hire </span>
              <Form.Control
                placeholder="Enter Badge Number"
                type="date"
                name="hire_date"
                value={hire_date}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span>First Name </span>
              <Form.Control
                placeholder="Enter First Name"
                type="text"
                name="first_name"
                value={first_name}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <span>Last Name </span>
              <Form.Control
                placeholder="Enter Last Name"
                type="text"
                name="last_name"
                value={last_name}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Badge Number </span>
              <Form.Control
                placeholder="Enter Badge Number"
                type="number"
                name="badge_number"
                value={badge_number}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <span>Gender </span>
              <Form.Select name="gender" value={gender} onChange={handleChange}>
                <option>Choose Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <span>Photo </span>
              <Form.Control
                placeholder="Enter Image URL"
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Email </span>
              <Form.Control
                placeholder="Enter Email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <span>Phone </span>
              <Form.Control
                placeholder="Enter Phone Number"
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <span>Employment Type </span>
              <Form.Select name="type" value={type} onChange={handleChange}>
                <option>Employment Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </Form.Select>
            </Col>
            <Col>
              <span>Length of Service </span>
              <Form.Control
                placeholder="Enter length_of_service"
                type="number"
                name="length_of_service"
                value={length_of_service}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Benefit Package </span>
              <Form.Select
                name="benefits"
                value={benefits}
                onChange={handleChange}
              >
                <option>Benefit Option</option>
                <option>Package 1 with Full Health Coverage</option>
                <option>Package 2 with Stock Options</option>
                <option>Package 3 with Bonuses and Incentives </option>
                <option>Package 5 with Employee Assistance Program</option>
                <option>Not Qualified</option>
              </Form.Select>
            </Col>
            <Col>
              <span>Salary/Wages </span>
              <Form.Control
                placeholder="Enter Salary"
                type="text"
                name="salary"
                value={salary}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <span>Address </span>
              <Form.Control
                placeholder="Enter Address"
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <span>City </span>
              <Form.Control
                placeholder="Enter City"
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <span>State </span>
              <Form.Control
                placeholder="Enter State"
                type="text"
                name="state"
                value={state}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <span>Zipcode </span>
              <Form.Control
                placeholder="Enter Zipcode"
                type="text"
                name="zip"
                value={zip}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-end my-3">
            <Button
              onClick={() => navigate(-1)}
              className="me-3"
              variant="danger"
            >
              Cancel
            </Button>
            <Button variant="success" type="submit">
              Finish Update
            </Button>
          </div>
        </Stack>
      </Form>
    </div>
  );
};

export default EditEmployee;
