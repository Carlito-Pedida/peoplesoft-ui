import axios from "axios";
import { useEffect, useState } from "react";
import CoffeeContext from "./CoffeeContext";

export const CoffeeProvider = (props) => {
  const [coffee, setCoffee] = useState([]);
  const baseUrl = "http://localhost:3000/api/coffee/";

  useEffect(() => {
    async function fetchData() {
      await getAllCoffee();
    }
    fetchData();
  }, []);

  function getAllCoffee() {
    return axios.get(baseUrl).then((response) => setCoffee(response.data));
  }

  function getCoffee(_id) {
    return axios.get(baseUrl + _id).then((response) => {
      getAllCoffee();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function addCoffee(coffee) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("myCoffeeToken")}`
    };

    return axios.post(baseUrl, coffee, { headers }).then((response) => {
      getAllCoffee();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function updateCoffee(coffee) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("myCoffeeToken")}`
    };

    return axios
      .put(baseUrl + coffee._id, coffee, { headers })
      .then((response) => {
        getAllCoffee();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function deleteCoffee(_id) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("myCoffeeToken")}`
    };
    return axios.delete(baseUrl + _id, { headers }).then((response) => {
      getAllCoffee();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffee,
        getCoffee,
        addCoffee,
        updateCoffee,
        deleteCoffee
      }}
    >
      {props.children}
    </CoffeeContext.Provider>
  );
};
