import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoffeeContext from "../contexts/CoffeeContext";

const NewCoffee = () => {
  let params = useParams();
  let navigate = useNavigate();

  let [coffee, setCoffee] = useState({
    _id: params.coffeeId,
    name: "",
    description: "",
    price: 0
  });

  let { getCoffee, addCoffee } = useContext(CoffeeContext);

  let { _id, name, description, price } = coffee;

  useEffect(() => {
    if (_id === undefined) return;
    async function fetch() {
      await getCoffee(_id).then((coffee) => setCoffee(coffee));
    }
    fetch();
  }, [getCoffee, _id]);

  function handleChange(event) {
    setCoffee((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function add() {
    if (_id === undefined) {
      return addCoffee(coffee);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    add(coffee)
      .then(() => {
        navigate("/coffee");
      })
      .catch((error) => {
        console.log(error);
        navigate("/signin");
      });
  }

  return (
    <form onSubmit={handleSubmit} key={_id}>
      <h1>ADD COFFEE</h1>
      <span>Coffee Name </span>
      <input
        placeholder="Enter coffee name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Description </span>
      <input
        placeholder="Enter description"
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Price </span>
      <input
        placeholder="Enter price"
        type="number"
        name="price"
        value={price}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <button>Create New Coffee</button>
    </form>
  );
};

export default NewCoffee;
