import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoffeeContext from "../contexts/CoffeeContext";

const EditCoffee = () => {
  let params = useParams();
  let [coffee, setCoffee] = useState({
    _id: params.coffeeId,
    name: "",
    description: "",
    price: 0
  });

  let { getCoffee, updateCoffee } = useContext(CoffeeContext);
  let navigate = useNavigate();
  let { _id, name, description, price } = coffee;

  useEffect(() => {
    if (_id === undefined) return;
    async function fetch() {
      await getCoffee(_id).then((coffee) => setCoffee(coffee));
    }
    fetch();
  }, []);

  function handleChange(event) {
    setCoffee((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function update() {
    return updateCoffee(coffee);
  }

  // function handleSubmit(event) {
  //   alert(`${coffee.name} is updated!`);
  //   event.preventDefault();
  //   update(coffee).then(() => {
  //     navigate("/coffee");
  //   });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    update(coffee)
      .then(() => {
        if (!coffee.ok) {
          alert(`${coffee.name} is updated!`);
          navigate("/coffee");
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
      <h1>EDIT COFFEE</h1>
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
      <button>Update Coffee</button>
    </form>
  );
};

export default EditCoffee;
