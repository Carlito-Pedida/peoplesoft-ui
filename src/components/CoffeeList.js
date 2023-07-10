import React, { useContext } from "react";
import CoffeeContext from "../contexts/CoffeeContext";
import { Link, useNavigate } from "react-router-dom";

function CoffeeList() {
  let navigate = useNavigate();

  let { deleteCoffee } = useContext(CoffeeContext);

  function handleDelete(_id) {
    deleteCoffee(_id)
      .then(() => {
        navigate("/coffee");
      })
      .catch((error) => {
        console.log(error);
        window.alert("You are not authorized to perform this operation");
        navigate("/signin");
      });
  }

  return (
    <CoffeeContext.Consumer>
      {({ coffee }) => {
        return (
          <div>
            <h1>Coffee List</h1>
            <Link to="/coffee/new">Add New Coffee</Link>
            {console.log(coffee)}
            <div>
              {coffee.map((coffee) => {
                return (
                  <div key={coffee._id}>
                    <h2>
                      {coffee.name} | ${coffee.price}
                    </h2>
                    <p>{coffee.description}</p>

                    <Link to={`/coffee/edit/${coffee._id}`}>Edit</Link>
                    <span> | </span>
                    <Link
                      to={"/coffee/"}
                      onClick={handleDelete.bind(this, coffee._id)}
                    >
                      Delete Coffee
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </CoffeeContext.Consumer>
  );
}

export default CoffeeList;
