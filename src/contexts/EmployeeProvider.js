import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeContext from "./EmployeeContext";

export const EmployeeProvider = (props) => {
  const [employee, setEmployee] = useState([]);
  const baseUrl = "http://localhost:4000/api/employee/";

  useEffect(() => {
    async function fetchData() {
      await getAllEmployee();
    }
    fetchData();
  }, []);

  function getAllEmployee() {
    return axios
      .get(baseUrl)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("Error fetching user assets:", error));
  }

  function getEmployee(_id) {
    return axios.get(baseUrl + _id).then((response) => {
      getAllEmployee();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function addEmployee(employee) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("myUserToken")}`
    };

    return axios.post(baseUrl, employee, { headers }).then((response) => {
      getAllEmployee();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function updateEmployee(employee) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("myUserToken")}`
    };

    return axios
      .put(baseUrl + employee._id, employee, { headers })
      .then((response) => {
        getAllEmployee();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function deleteEmployee(_id) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("myUserToken")}`
    };
    return axios.delete(baseUrl + _id, { headers }).then((response) => {
      getAllEmployee();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        getEmployee,
        addEmployee,
        updateEmployee,
        deleteEmployee
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
